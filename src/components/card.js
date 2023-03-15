


const Card = (props) => {
  //let image = {backgroundImage: `url ('${props.image}')`};

  return (
    <div className="card shadow-lg" style={{ width: "12rem" }}>
      <img src={props.image} className="card-img-top" style={{ width: "12rem", height: "15rem", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.house}</p>
        <p className="card-text">{props.ancestry}</p>
        <br />
        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
          <a href="#" type="button" className="btn btn-outline-dark">Back to top</a>
          <a href="#" type="button" className="btn btn-outline-dark">Fav</a>
        </div>

      </div>
    </div>
  );
};

export default Card;