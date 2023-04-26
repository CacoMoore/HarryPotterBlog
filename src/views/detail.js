import File from "../components/file";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = (props) => {

    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    const getCharacter = () => {
        //const url = `https://hp-api.onrender.com/api/characters/${id}`;
        const url = `https://hp-api.onrender.com/api/character/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(error => console.log(error))
    };
    useEffect(() => {
        getCharacter();
        console.log(character);

    }, [id] )


    return (
        <div>
            <File
                image={character.image}
                name={character.name}
                house={character.house}
                ancestry={character.ancestry}
                alternate_names={character.alternate_names}
                species={character.species}
                dateOfBirth={character.dateOfBirth}
                wand={character.wand}
                patronus={character.patronus}
            />

        </div>
    );


}

export default Detail;