import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
const Sidebars = ({sidebars}) => {
    console.log(sidebars)
    return (
        <div  className="w-1/3 m-3 p-3">
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
                    sidebars.map((sidebar , idx) => <Sidebar key={sidebar.id} index={idx} sidebar={sidebar}></Sidebar>)
        }       
                
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