import '../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import Header from './header'
import Footer from './footer'

export default function RootLayout({ children }) {
    return (
        <html>
        <head />
        <title>Root Layout</title>
        <body>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </body>
        </html>
    )
}