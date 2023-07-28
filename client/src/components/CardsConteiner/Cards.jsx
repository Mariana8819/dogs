import Card from "../Card/Card";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css"

export default function Cards(dogs){
    return(
        <div className={styles.cardsContainer}>
            {dogs?.map((dog, index)=>(
                <Link key={index} to={`/detail/${dog.id}`}>
                    <Card 
                    key={index}
                    id={dog.id}
                    image={dog.image}
                    name={dog.name}
                    height={dog.height}
                    weight={dog.weight}
                    
                    />
                </Link>
           ))}
        </div>
    )
}