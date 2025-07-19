// middleware.js
import { NextResponse } from 'next/server'

export function middleware() {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Site Under Maintenance</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: #f3f4f6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }
          img {
            max-width: 200px;
            margin-bottom: 2rem;
          }
          h1 {
            font-size: 2rem;
            color: #111827;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.125rem;
            color: #4b5563;
          }
        </style>
      </head>
      <body>
        <h1>Full Site Coming Soon at allseasonfoam.com</h1>
        <p>Our site is currently offline for maintenance.<br>Please check back shortly!</p>
      </body>
    </html>
  `

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}

// Optional: limit to only public routes (skip /api/*, etc)
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
}
