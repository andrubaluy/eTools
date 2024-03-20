import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="border m-1 col-3 row d-flex flex-column">
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <img src={img} alt="" width="140px"></img>
            <p className="card-text">{description}</p>
            <Link to={`/product/${id}`} >
            <button className="btn btn-outline-success mt-auto" >Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
