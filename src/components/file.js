
const File = (props) => {
    //let image = {backgroundImage: `url ('${props.image}')`};

    return (
        <div className="d-flex justify-content-center">
            <div className="row g-0 border rounded overflow-hidden flex-md-row my-5 shadow-lg h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2">{props.house}</strong>
                    <h3 className="mb-0">Name{props.name}</h3>
                    <div className="mb-1 text-muted">Alternate name {props.alternate_names}</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Specie {props.species}</li>
                        <li className="list-group-item">Date of birth {props.dateOfBirth}</li>
                        <li className="list-group-item">Ancestry {props.ancestry}</li>
                        <li className="list-group-item">Wand {props.wand}</li>
                        <li className="list-group-item">Patronus {props.patronus}</li>
                    </ul>

                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={props.image} className="card-img-top" style={{ width: "20rem", height: "23rem", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default File;