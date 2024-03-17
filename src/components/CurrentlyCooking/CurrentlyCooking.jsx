
import PropTypes from 'prop-types';
const CurrentlyCooking = ({ item }) => {
    return (
        <>
            
            {item && (
            <tr className="hover:bg-gray-100">
            <td>{item + 1}</td>
            <td>{item.recipe_name}</td>
            <td>{item.preparing_time}</td>
            <td>{item.calories}</td>
           
        </tr>
        )}
      
            
       
        </>
    );
};
CurrentlyCooking.propTypes = {
    item: PropTypes.object
};
export default CurrentlyCooking;