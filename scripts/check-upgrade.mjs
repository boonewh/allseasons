// All Formspree requests are intercepted. Tracking is stubbed; no real sends.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const output=fileURLToPath(new URL('../test-results/',import.meta.url));
fs.mkdirSync(output,{recursive:true});
import {chromium,devices} from 'playwright';
const base=process.env.SITE_CHECK_BASE_URL||'http://127.0.0.1:3432';
const stage=process.env.CHECK_STAGE||'after',local=!process.env.SITE_CHECK_BASE_URL;
const paths=['/','/coatings','/containments','/rentals','/painting','/contact'];
let server;const checks=[];
async function main(){
 if(local){server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-H','127.0.0.1','-p','3432'],{cwd:root,env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'},windowsHide:true,stdio:'ignore'});let ready=false;for(let i=0;i<80;i++){if(server.exitCode!==null)throw Error('App exited');try{if((await fetch(base,{signal:AbortSignal.timeout(1000)})).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,250));}assert(ready);}
 try{
  const images=new Set(),pages=[];
  for(const path of paths){const r=await fetch(base+path,{signal:AbortSignal.timeout(30000)});assert.equal(r.status,200);const html=await r.text();const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert(title);assert(html.includes('877'));assert(html.includes('https://enterprise52.com/js/813387.js'));assert(html.includes('https://enterprise52.com/813387.png'));assert(html.includes('application/ld+json'));
   const schema=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(x=>JSON.parse(x[1]));
   for(const tag of html.matchAll(/<img\b[^>]*>/g)){const src=tag[0].match(/\bsrc="([^"]+)"/)?.[1];if(src?.startsWith('/images/'))images.add(src);}
   for(const match of html.matchAll(/url\((?:&quot;|&#x27;|['"])?(\/images\/[^)'"&]+)[^)]*\)/g))images.add(match[1]);
   pages.push({path,title,description:html.match(/<meta name="description" content="([^"]+)"/)?.[1],schema});
  }
  for(const path of images){const r=await fetch(base+path,{signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,path);assert.match(r.headers.get('content-type'),/^image\//);assert((await r.arrayBuffer()).byteLength>100);}
  const sitemap=await fetch(base+'/sitemap.xml');assert.equal(sitemap.status,200);const xml=await sitemap.text();for(const path of paths)assert(xml.includes('https://www.allseasonsfoam.com'+(path==='/'?'':path)));
  assert.equal((await fetch(base+'/favicon.ico')).status,200);assert.equal((await fetch(base+'/upgrade-check-missing')).status,404);
  const browser=await chromium.launch({headless:true});const ui=[];try{for(const [name,options] of [['desktop',{viewport:{width:1440,height:1000}}],['mobile',{...devices['iPhone 13']}]]){
   const context=await browser.newContext({...options,serviceWorkers:'block'});const errors=[],unexpected=[],failed=[],submissions=[];let mode='error',release;
   await context.route('**/*',async route=>{const request=route.request(),url=new URL(request.url());if(url.origin===base)return route.continue();if(url.hostname==='enterprise52.com')return route.fulfill({status:200,contentType:'application/javascript',body:''});
    if(url.origin==='https://formspree.io'&&url.pathname==='/f/myzpdjkl'){
     assert.equal(request.method(),'POST');const data=request.postData();assert(data.includes('upgrades@example.test'));assert(data.includes('All Seasons Foam Contact Form Submission'));assert(data.includes('Synthetic local verification'));submissions.push({url:url.href,mode});
     if(mode==='pending')await new Promise(r=>{release=r;});
     if(mode==='network')return route.abort('failed');
     return route.fulfill({status:mode==='error'?503:200,contentType:'application/json',body:mode==='error'?JSON.stringify({errors:[{message:'Synthetic Formspree service unavailable'}]}):JSON.stringify({next:'https://formspree.io/thanks'})});
    }unexpected.push(url.origin);return route.abort();
   });
   const page=await context.newPage();page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(new URL(r.url()).origin===base&&r.status()>=400)failed.push(r.url());});const layout=[];
   for(const path of paths){assert.equal((await page.goto(base+path,{waitUntil:'networkidle'})).status(),200);await page.locator('h1').first().waitFor();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,path);
    layout.push(await page.evaluate(()=>({path:location.pathname,heading:[...document.querySelectorAll('h1')].map(x=>x.textContent),bodyFont:getComputedStyle(document.body).fontFamily,headingSize:getComputedStyle(document.querySelector('h1')).fontSize,headingColor:getComputedStyle(document.querySelector('h1')).color,navColor:getComputedStyle(document.querySelector('nav')).backgroundColor})));
   }
   // Native validation must stop empty submissions before the intercepted provider.
   const send=page.getByRole('button',{name:'Send Message',exact:true});await send.click();assert.equal(submissions.length,0);assert.equal(await page.locator('form').evaluate(f=>f.checkValidity()),false);
   await page.getByLabel('Name *',{exact:true}).fill('Fictional upgrade fixture');await page.getByLabel('Email *',{exact:true}).fill('upgrades@example.test');await page.getByLabel('Message *',{exact:true}).fill('Synthetic local verification; no real message.');
   await send.click();await page.getByText('Synthetic Formspree service unavailable',{exact:true}).waitFor();assert.equal(await send.isEnabled(),true);assert.equal(await page.getByLabel('Name *',{exact:true}).evaluate(e=>e.value),'Fictional upgrade fixture');
   assert.equal(await page.getByLabel('Message *',{exact:true}).evaluate(e=>e.value),'Synthetic local verification; no real message.');
   const formWideErrorVisible=await page.getByText('Synthetic Formspree service unavailable',{exact:true}).isVisible();
   if(stage!=='baseline')assert(formWideErrorVisible,'Provider-wide failures need a visible error');
   mode='network';await send.click();await page.getByText(/Failed to fetch/i).waitFor();
   assert((await page.locator('form').getByRole('alert').innerText()).trim());assert.equal(await send.isEnabled(),true);
   assert.equal(await page.getByLabel('Message *',{exact:true}).evaluate(e=>e.value),'Synthetic local verification; no real message.');
   mode='pending';await send.click();await page.getByRole('button',{name:'Send Message',exact:true}).waitFor();assert.equal(await send.isEnabled(),false);for(let i=0;!release&&i<80;i++)await new Promise(r=>setTimeout(r,25));assert(release);mode='success';release();await page.getByText('Thank you! We’ll get back to you soon.',{exact:true}).waitFor();assert.equal(submissions.length,3);
   await page.goto(base,{waitUntil:'networkidle'});const nav=page.locator('nav');if(name==='mobile')await nav.getByRole('button').click();await nav.getByRole('link',{name:'Contact',exact:true}).click();await page.waitForURL(base+'/contact');
   if(process.env.BASELINE_CHECKS_PATH){
    const before=JSON.parse(fs.readFileSync(process.env.BASELINE_CHECKS_PATH));
    const normalize=styles=>page.evaluate(styles=>{
     const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{colorSpace:'srgb'});
     const pixel=color=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=color;ctx.fillRect(0,0,1,1);return Array.from(ctx.getImageData(0,0,1,1).data);};
     return styles.map(style=>({...style,headingColor:pixel(style.headingColor),navColor:pixel(style.navColor)}));
    },styles);
    assert.deepEqual(await normalize(layout),await normalize(before.ui.find(x=>x.name===name).layout),'Original typography and equivalent rendered colors retained');
   }
   assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);assert.deepEqual(failed,[]);await page.screenshot({path:`${output}/${stage}-${name}.png`,fullPage:true});ui.push({name,layout,formWideErrorVisible,draftPreserved:true,pendingDisabled:true,successAndRetry:true,navigation:true,interceptedSubmissions:submissions});await context.close();
  }}finally{await browser.close();}
  const result={stage,base,publicPages:pages,images:[...images],ui,realSubmissions:0,trackingStubbed:true};
  if(stage==='after'&&process.env.BASELINE_CHECKS_PATH){const before=JSON.parse(fs.readFileSync(process.env.BASELINE_CHECKS_PATH));assert.deepEqual(pages,before.publicPages,'Metadata and schema unchanged');assert.deepEqual([...images],before.images,'Images unchanged');}
  fs.writeFileSync(`${output}/${stage}-checks-browser.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({stage,pages:pages.length,images:images.size,ui:ui.map(x=>({name:x.name,formWideErrorVisible:x.formWideErrorVisible})),realSubmissions:0}));
 }finally{server?.kill();}
}
main().catch(e=>{server?.kill();console.error(e);process.exitCode=1;});
