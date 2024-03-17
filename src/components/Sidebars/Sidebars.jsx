import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
const Sidebars = ({sidebars}) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handlePreparing = (item) => {
        setCurrentlyCooking([...currentlyCooking, item]); 
    };

    const handleStopPreparing = (item) => {
        setCurrentlyCooking(currentlyCooking.filter((i) => i !== item)); // Remove the clicked item from the currently cooking list
    };
  
    return (
        <div  className="lg:w-1/3 mt-6 border rounded-2xl p-6">
        <h1 className="text-2xl text-center">Want to cook : {sidebars.length}</h1>
        
            
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
                {
                    sidebars.map((sidebar , idx) => <Sidebar key={sidebar.id} index={idx} sidebar={sidebar} onPreparing={handlePreparing}></Sidebar>)
                    }       
                
                </tbody>
            </table>
            
        </div>
        <h1 className="text-2xl text-center">Currently cooking: </h1>
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
    sidebars:PropTypes.object,
}
export default Sidebars;