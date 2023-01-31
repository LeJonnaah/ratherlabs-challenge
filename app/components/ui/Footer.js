const Footer = () => {
    const copyrightDate = new Date().getFullYear()

    return (
        <footer
        className="bg-primary d-flex flex-wrap justify-content-between align-items-center py-3 border-top mt-auto"
        >
            <div
            className="col-md-4 d-flex align-items-center"
            >
                <span className="text-muted">
                    @{copyrightDate}  Company, Inc</span>
            </div>
        </footer>


    )

}

export default Footer