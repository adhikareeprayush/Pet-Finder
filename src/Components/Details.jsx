import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [pet, setPet] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        requestPetFromId();
    }, [])

    // get the pet from id
    async function requestPetFromId() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${id}`
        );
        const json = await res.json();
        setPet(json.pets[0]);
        setIsLoading(false);
        console.log(pet);
    }

    return (
        <div className="details">
            {pet && !isLoading ? (
                <>
                    <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                    <p>{pet.description}</p>
                    {pet.images ? (
                        <img src={pet.images[0]} alt="" />
                    ) : (
                        ""
                    )}
                    <button>Adopt {pet.name}</button>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Details;