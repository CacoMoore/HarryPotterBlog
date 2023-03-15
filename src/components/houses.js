const Houses = (props) => {
    let image = { backgroundImage: `url('${props.bkg}')` , backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", };
    return (
        <>
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={image}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.housename}</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <img src="https://www.nicepng.com/png/detail/140-1407145_hogwarts-logo-png-image-free-download-hogwarts-crest.png" alt="Bootstrap" width="42" height="42" className="rounded-circle border border-white" />
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                <small>House of Hogwarts</small>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>


    );

};

export default Houses;