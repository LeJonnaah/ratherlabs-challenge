import '../../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import NavBar from '../components/ui/NavBar'
import SideBar from 'app/components/ui/SideBar'
import Footer from '../components/ui/Footer'

export default function RootLayout({ children }) {
    return (
        <html
        className='h-100'
        >
        <body
        className='d-flex flex-column h-100'
        >
            <NavBar />
            <div
            className='container-fluid'
            >
                <div
                className='row'
                >
                    <SideBar />
                    <main
                    className='col-10'
                    >
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </body>
        </html>
    )
}
