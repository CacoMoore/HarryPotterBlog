import { useContext } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Favorites = (props) => {
    const trash = <FontAwesomeIcon icon={faTrash} />   
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="cards container px-4 py-5" id="custom-cards">
                <h1>Favorites</h1>
                <p className="lead mb-5"> You have <strong>{store.favorite.length}</strong> favorites characters in you list.</p>
                
                    {store.favorite.length > 0 ? (
                        store.favorite.map((item, index) => (
                            <ul className="" style={{ listStyle: "none" }}>
                                <li
                                    key={index}
                                    className=" text-dark">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-dark rounded-circle border-0 mb-2"
                                        onClick={() => actions.removeFavorite(item)}>{trash}</button>
                                    <strong>{item}</strong>
                                    
                                </li>


                            </ul>
                        ))
                    ) : (
                        <li className="dropdown-item-text text-center text-secondary"> Empty </li>

                    )}
                
                
                
            </div>





        </>
    )

}

export default Favorites;