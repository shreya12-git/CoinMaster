import React from 'react';
import StudyMaterial from './StudyMaterial';
import st1img from '../assets/st1img.png';
import st5img from '../assets/st5img.png';
import st2img from '../assets/st2img.png';
import st3img from '../assets/st3img.png';
import st4img from '../assets/st4img.png';
import st6img from '../assets/st6img.png';

const StudyMaterialContent = () => {
    const studyData = [
        {
            title: "Budgeting",
            description: "Explore budgeting in depth and become expertise in it with the help of articles, case studies, and quizzes.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st5img,
        },
        {
            title: "Investing",
            description: "Explore investing in depth and become expertise in it with the help of articles, case studies, and quizzes.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st1img,
        },
        {
            title: "Debt Management",
            description: "Explore debt management in depth and become expertise in it with the help of articles, case studies, and quizzes.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st3img,
        },
        {
            title: "Retirement Planning",
            description: "Explore retirement planning in depth and become expertise in it with the help of articles, case studies, and quizzes.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st2img,
        },
        {
            title: "Saving",
            description: "Explore saving in depth and become expertise in it with the help of articles, case studies, and quizzes.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st4img,
        },
        {
            title: "Scam & Fraud",
            description: "Able to recognize common financial scams and protect personal information to safeguard one's finances and identity.",
            buttonText: "Explore",
            buttonLink: "#",
            image: st6img,
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-10 max-w-5xl mx-auto mr-50"> {/* Adjust gap and padding */}
            {studyData.slice(0, 4).map((study, index) => (
                <div key={index} className="relative flex justify-center">
                    <img 
                        src={study.image}
                        alt="hat"
                        className="w-15 h-15 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10"
                    />
                    <StudyMaterial
                        title={study.title}
                        description={study.description}
                        buttonText={study.buttonText}
                        buttonLink={study.buttonLink}
                    />
                </div>
            ))}
            <div className="relative col-span-1 flex justify-center">
                <img 
                    src={studyData[4].image}
                    alt="hat"
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10"
                    width={200} height={200}
                />
                <StudyMaterial
                    title={studyData[4].title}
                    description={studyData[4].description}
                    buttonText={studyData[4].buttonText}
                    buttonLink={studyData[4].buttonLink}
                />
            </div>
            <div className="relative col-span-1 flex justify-center">
                <img 
                    src={studyData[5].image}
                    alt="hat"
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10"
                    width={100} height={100}
                />
                <StudyMaterial
                    title={studyData[5].title}
                    description={studyData[5].description}
                    buttonText={studyData[5].buttonText}
                    buttonLink={studyData[5].buttonLink}
                />
            </div>
        </div>
    );
};

export default StudyMaterialContent;
