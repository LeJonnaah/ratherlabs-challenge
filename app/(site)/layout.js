import '../../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'

export default function RootLayout({ children }) {
    return (
        <html
        className='h-100'
        >
        <body
            className="d-flex flex-column h-100"
        >
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
        </html>
    )
}