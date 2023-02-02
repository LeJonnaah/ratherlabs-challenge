import '../../styles/globals.css'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import NavBar from '../components/ui/NavBar'
import AdminSideBar from 'app/components/ui/AdminSideBar'
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
                    <AdminSideBar />
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
