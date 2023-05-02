
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../store/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
  //let image = {backgroundImage: `url ('${props.image}')`};
  const like = <FontAwesomeIcon icon={faHeart} />

  const { actions } = useContext(Context);

  const handleSubmit = () => {
    actions.addFavorite(props.name);
  };

  return (
    <div className="card shadow-lg" style={{ width: "70%" }}>
      <img src={props.image} className="card-img-top" style={{ width: "100%", height: "280px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }} alt="..." />
      <div className="card-body">
        <p className="card-title fs-6 fw-semibold">{props.name} </p>
        <p className="card-text">{props.house}</p>
        <p className="card-text">{props.ancestry}</p>
        <br />
        <div className="btn-group btn-sm " aria-label="Small button group">
          <Link to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-sm btn-outline-dark me-4">See profile</button>
          </Link>
          <button onClick={handleSubmit} type="button" className="btn btn-sm btn-outline-dark rounded-circle border-0">{like}</button>
        </div>

      </div>
    </div>
  );
};

export default Card;