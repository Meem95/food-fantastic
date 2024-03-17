
import PropTypes from 'prop-types';
const CurrentlyCooking = ({ item }) => {
    console.log(item)
    if (item && Array.isArray(item) && item.length > 0) {
        const currentItem = item[0]; 
        console.log(currentItem); 
        return (
            <>
            {item.map((currentItem, index) => (
                <tr key = {index} className="hover:bg-gray-100">
                    <td>{index + 1}</td>
                    <td>{currentItem.recipe_name}</td>
                    <td>{currentItem.preparing_time}</td>   
                    <td>{currentItem.calories}</td>
                </tr>
            ))}
            </>
        );
    } else {
        return null; 
    }
};
CurrentlyCooking.propTypes = {  
    item: PropTypes.arrayOf(PropTypes.object)
};
export default CurrentlyCooking;