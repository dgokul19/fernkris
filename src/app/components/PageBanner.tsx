
interface PageProps {
    title: string
}

const PageBanner = (props: PageProps) => {
    const { title } = props;
    return (
        <>
            {/* <!-- Page Banner Start --> */}
            <div className="container-fluid pb-5 bg-primary hero-header">
                <div className="container py-5">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-1 mb-0 animated slideInLeft">{title}</h1>
                        </div>
                        <div className="col-lg-6 animated slideInRight">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-end mb-0">
                                    <li className="breadcrumb-item"><a className="text-primary" href="#!">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-primary">Pages</a></li>
                                    <li className="breadcrumb-item text-secondary active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Page Banner End --> */}
        </>
    );
};

export default PageBanner;