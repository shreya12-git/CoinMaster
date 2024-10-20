import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const CardsHome = ({ image, title, description, buttonText, buttonLink }) => {
    return (
        <div className=" bg-white border border-gray-200 rounded-2xl shadow " style={{ backgroundColor: "#C1DDF2",width:"300px",marginLeft:"20%"}}>
            <Link to={buttonLink}>  {/* Replace <a> with <Link> */}
                <img  src={image} alt={title}  style={{width:"100%", height:"40%" }}/>
            </Link>
            <div className="p-5 jus">
                <Link to={buttonLink}>  {/* Replace <a> with <Link> */}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{color:"#212F4A"}}>{title}</h5>
                </Link>
                <p className="mb-3 font-normal" style={{color:"#212F4A"}}>
                    {description}
                </p>
                <div className='flex justify-center'>
                <Link to={buttonLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                    {buttonText}
                </Link>
                </div>
            </div>
        </div>
    );
};

export default CardsHome;
