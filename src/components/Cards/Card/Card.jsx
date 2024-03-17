import { BsStopwatch } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
const Card = () => {
    return (
        <div className=" md:w-2/3 ">
        <div className="card card-compact w-96 bg-base-100  border-2 p-4">
            <figure><img src="../../public/images/food.jpeg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"></h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>Classic Italian pasta dish with savory meat sauce.</p>
                <hr className="border-b-1 space-y-3"></hr>
                <h3 className="text-xl font-bold">
                    Ingredients: 6
                    </h3>
                <div className="p-4">
                   
                    <ul className="list-disc">
                        <li>Now this is a story all about how</li>
                        <li>Now this is a story all about how</li>
                        <li>Now this is a story all about how</li>
                    </ul>
                </div>
                <hr className="border-b-1 space-y-3"></hr>
                <div className="flex justify-start gap-6">
                    <div className="flex"> <BsStopwatch/> <span className="ml-2 ">30 minutes</span></div>
                    <div className="flex"> <FaFire /> <span className="ml-2 ">600 Calories</span></div>
                   
                </div>
                <div className="card-actions justify-start">
                <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                </div>
            </div>
        </div>
     
    </div>
    );
};

export default Card;