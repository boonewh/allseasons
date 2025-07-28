import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FormspreeWrapper from '@/components/FormspreeWrapper'

export const metadata = {
  title: 'All Season Construction - DFW Construction Services',
  description: 'Professional construction services in the Dallas-Fort Worth area.',
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

