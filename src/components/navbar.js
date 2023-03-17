import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">This is a blog of the wizarding world. You can explore de houses of Howgarts, the characters and mark some as favorites.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">More info</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/favorites" className="text-white">Go to Your Favorites characters</Link></li>
                                <li><a href="https://www.wizardingworld.com/" className="text-white">Go to Wizarding World HP Official site</a></li>
                                <li><a href="https://harrypotter.fandom.com/es/wiki/HarryPotter_Wiki" className="text-white">Go to Harry Potter fandom</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img style={{width: "5rem", height: "5rem"}} src="https://uploads.turbologo.com/uploads/design/hq_preview_image/5097676/draw_svg20210617-26747-23281c.svg.png"></img>
                        <strong className="ms-3">Harry Potter Blog</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;