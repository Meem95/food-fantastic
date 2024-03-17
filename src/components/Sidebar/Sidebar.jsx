const Sidebar = () => {
    return (
        <div className="w-1/3 m-4 p-4">
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                
                <tr className="hover">
                    <th>1</th>
                    <td>Spaghetti Bolognese</td>
                    <td>30 minutes</td>
                    <td>600 calories</td>
                </tr>
                </tbody>
            </table>
</div>
            
        </div>
    );
};

export default Sidebar;