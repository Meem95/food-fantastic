import { useEffect, useState } from "react";
import Card from "./Card/Card";
import PropTypes from 'prop-types'; 


const Cards = ({handleAddToSidebar}) => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('recipe.json')
        .then(response => response.json())
        .then(data => setCards(data))
    }
        ,[])
    return (
        <div className="grid lg:grid-cols-2 gap-6 space-x-4">
        {
            cards.map(card =>
            <Card key={card.id}
             card={card}
             handleAddToSidebar= {handleAddToSidebar}
             
             >
            </Card>)
        }
        </div>
    );
};
Cards.propTypes = {
    handleAddToSidebar:PropTypes.func,
   
}
export default Cards;