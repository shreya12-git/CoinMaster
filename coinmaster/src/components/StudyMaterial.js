import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const StudyMaterial = ({ title, description, buttonText, buttonLink }) => {
    return (
        <div className="rounded-2xl shadow " style={{ backgroundColor: '#24385F',width:"300px",marginLeft:"20%"}}>
            <div className="p-5 jus">
                <Link to={buttonLink}>  {/* Replace <a> with <Link> */}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{color:"white"}}>{title}</h5>
                </Link>
                <p className="mb-3 font-normal" style={{color:"white"}}>
                    {description}
                </p>
                <div className='flex justify-center'>
                <Link to={buttonLink} className=" w-100 inline-flex items-center px-3 py-2 text-sm font-bold text-center text-#24385F  bg-white rounded-sm  ">
                    {buttonText}
                </Link>
                </div>
            </div>
        </div>
    );
};

export default StudyMaterial;
