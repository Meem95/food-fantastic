import PropTypes from 'prop-types';

const Sidebar = ({sidebar,index, onPreparing , isPreparing}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = sidebar;
    const handlePreparing = () => {
    onPreparing(recipe_id); 
}
    return (
        <>
         {!isPreparing && (
        <tr className="hover:bg-gray-100">
            <td>{index + 1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <button onClick={handlePreparing} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
        </tr>
         )}  
            
        </>
    );
};
Sidebar.propTypes = {
    sidebar :PropTypes.object,
    index: PropTypes.number.isRequired,
    onPreparing: PropTypes.func.isRequired,
    isPreparing: PropTypes.bool.isRequired

}
export default Sidebar;