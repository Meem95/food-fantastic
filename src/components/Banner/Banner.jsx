import banner from '../../assets/images/banner.jpeg'
const Banner = () => {
    return (
    <div className="max-w-7xl mx-auto p-2">
        <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage:`url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8), inset 0 0 100px rgba(0, 0, 0, 0.4)', zIndex: 1}}>
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="py-6 text-white text-xl">Unlock the culinary worlds secrets with personalized cooking classes, designed to elevate your skills and tantalize your taste buds. </p>
                    <div className=" space-x-8 lg:mt-20">
                        <button className="btn bg-[#0BE58A] rounded-full">Explore Now</button>
                        <button className="btn btn-neutral rounded-full text-white font-bold">Our Feedback</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="text-center my-8 md:w-2/3 mx-auto">
            <h1 className="text-4xl font-bold mb-3">Our Recipes</h1>
            <p className="">
            Our Recipes serves as a curated culinary showcase, meticulously crafted to tantalize taste buds and ignite culinary passions. With an array of handpicked dishes ranging from timeless classics to innovative creations, it offers a gourmet experience designed to inspire and delight. 
            </p>
        </div>
    </div>
    );
};

export default Banner;