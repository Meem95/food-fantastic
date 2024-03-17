import { BsStopwatch } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';
const Card = ({card,handleAddToSidebar}) => {
    const { recipe_image, recipe_name, short_description,ingredients, preparing_time, calories} = card;
    const displayedIngredients = ingredients.slice(0, 3);
    return (
        <div >
        <div className="card card-compact lg:w-96 bg-base-100  border-2 p-4">
            <figure><img src="../../public/images/food.jpeg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <hr className="border-b-1 space-y-3"></hr>
                <h3 className="text-xl font-bold">
                    Ingredients: 6
                    </h3>
                <div className="p-3">
                   
                    <ul className="list-disc">
                    {
                        displayedIngredients.map((ingredient,idx )=> <span key={idx}> <li> {ingredient}</li> </span>)
            }
                    </ul>
                </div>
                <hr className="border-b-1 space-y-3"></hr>
                <div className="flex justify-start gap-6">
                    <div className="flex"> <BsStopwatch/> <span className="ml-2 ">{preparing_time}</span></div>
                    <div className="flex"> <FaFire /> <span className="ml-2 ">{calories}</span></div>
                   
                </div>
                <div className="card-actions justify-start">
                <button  onClick={()=> handleAddToSidebar(card)} className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                </div>
            </div>
        </div>
     
    </div>
    );
};
Card.propTypes = {
    card:PropTypes.object.isRequired,
    handleAddToSidebar:PropTypes.func,
}
export default Card;