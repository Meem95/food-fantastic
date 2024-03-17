const Header = () => {
    return (
    <div>
        <nav className="max-w-7xl mx-auto p-2">
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"  d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Recipes</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>
                </ul>
            </div>
            <div className="lg:navbar-end hidden lg:space-x-8">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-14 md:w-auto" />
                </div>
                    <img className="bg-[#02B76C] rounded-full p-1" src="../../public/images/p.svg"/>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;