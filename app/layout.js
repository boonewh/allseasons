import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FormspreeWrapper from '@/components/FormspreeWrapper'

export const metadata = {
  title: 'All Season Foam & Services',
  description: 'With 20+ years of expertise, All Seasons Foam Coatings & Services delivers reliable, long-lasting solutions to protect vital oil & gas infrastructure and keep operations safe and efficient.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <FormspreeWrapper>
          <main className="flex-grow">{children}</main>
        </FormspreeWrapper>
        <Footer />
      </body>
    </html>
  )
}

