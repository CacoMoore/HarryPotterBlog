import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../store/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const File = (props) => {
    const like = <FontAwesomeIcon icon={faHeart} />

    const { actions } = useContext(Context);

    const handleSubmit = () => {
        actions.addFavorite(props.name);
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="row g-0 border rounded overflow-hidden flex-md-row my-5 shadow-lg h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">

                    <h3 className="mb-0">{props?.name}</h3>
                    <div className="mb-1 text-muted">{props?.alternate_names}</div>

                    <ul className="container list-group list-group-flush mt-4">
                        <li className="row list-group-item">
                            <span className="col fw-semibold">Date of birth</span>
                            <span className="col">{props?.dateOfBirth}</span>
                        </li>

                        <li className="row list-group-item">
                            <span className="col fw-semibold">House</span>
                            <span className="col">{props?.house}</span>
                        </li>

                        <li className="row list-group-item">
                            <span className="col fw-semibold">Specie</span>
                            <span className="col">{props?.species}</span>
                        </li>

                        <li className="row list-group-item">
                            <span className="col fw-semibold">Ancestry</span>
                            <span className="col">{props.ancestry}</span>
                        </li>
                        <li className="row list-group-item">
                            <span className="col fw-semibold">Patronus</span>
                            <span className="col">{props.patronus}</span>
                        </li>
                        <li className="list-group-item">
                            <button onClick={handleSubmit} type="button" className="btn btn-sm btn-outline-dark rounded-circle border-0">{like}</button>
                        </li>
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