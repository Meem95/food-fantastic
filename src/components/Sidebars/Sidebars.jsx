import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Sidebars = ({ sidebars }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [wantToCookCount, setWantToCookCount] = useState(sidebars.length);

    useEffect(() => {
        setWantToCookCount(sidebars.length - currentlyCooking.length);
    }, [sidebars, currentlyCooking]);

    const handlePreparing = (itemId) => {
        const item = sidebars.find(sidebar => sidebar.recipe_id === itemId);
        if (item) {
            setCurrentlyCooking([...currentlyCooking, item]);
        }
    };

    const handleStopPreparing = (itemId) => {
        const updatedCookingList = currentlyCooking.filter(item => item.recipe_id !== itemId);
        setCurrentlyCooking(updatedCookingList);
    };

    const isPreparing = (itemId) => {
        return currentlyCooking.some(item => item.recipe_id === itemId);
    };

    return (
        <div className="lg:w-1/3 mt-6 border rounded-2xl p-2">
            <h1 className="text-2xl text-center">Want to cook : {wantToCookCount}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sidebars.map((sidebar, idx) =>
                            <Sidebar
                                key={sidebar.recipe_id}
                                index={idx}
                                sidebar={sidebar}
                                onPreparing={() => handlePreparing(sidebar.recipe_id)}
                                onStopPreparing={() => handleStopPreparing(sidebar.recipe_id)}
                                isPreparing={isPreparing(sidebar.recipe_id)}>
                            </Sidebar>)
                        }
                    </tbody>
                </table>
            </div>
            <h1 className="text-2xl text-center">Currently cooking: {currentlyCooking.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CurrentlyCooking item={currentlyCooking} />
                    </tbody>
                </table>
            </div>

        </div>
    );
};

Sidebars.propTypes = {
    sidebars: PropTypes.array.isRequired,
}

export default Sidebars;
