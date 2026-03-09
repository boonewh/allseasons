import './globals.css'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FormspreeWrapper from '@/components/FormspreeWrapper'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export const metadata = {
  title: 'All Seasons Foam & Services | Oil & Gas Coatings | Midland, TX',
  description: 'All Seasons Foam Coatings & Services - 20+ years serving Midland, Odessa & the Permian Basin. Expert secondary containment, protective coatings, and industrial painting for oil & gas operations.',
  keywords: 'foam coatings Midland TX, secondary containment Permian Basin, oil and gas coatings Odessa, industrial painting West Texas, polyurea coatings Midland, tank coatings Permian Basin',
  openGraph: {
    title: 'All Seasons Foam & Services | Oil & Gas Coatings | Midland, TX',
    description: 'Expert foam coatings and secondary containment for the Permian Basin oil & gas industry. Serving Midland, Odessa, and surrounding areas.',
    url: 'https://www.allseasonsfoam.com',
    siteName: 'All Seasons Foam & Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Seasons Foam & Services | Oil & Gas Coatings | Midland, TX',
    description: 'Expert foam coatings and secondary containment for the Permian Basin oil & gas industry.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

 return (
    <html lang="en">
      <head>
        <Script src="https://enterprise52.com/js/813387.js" strategy="afterInteractive" />
        <noscript><img alt="" src="https://enterprise52.com/813387.png" style={{display:'none'}} /></noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

