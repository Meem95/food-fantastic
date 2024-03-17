const Banner = () => {
    return (
    <div>
        <div className="hero min-h-screen" >
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="py-6">Unlock the culinary worlds secrets with personalized cooking classes, designed to elevate your skills and tantalize your taste buds. </p>
                    <div className=" space-x-4">
                        <button className="btn bg-[#0BE58A] rounded-full">Get Started</button>
                        <button className="btn btn-outline rounded-full ">Our Feedback</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;