import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import CardsHome from './CardsHome';  // Import the Card component

const CardsContent = () => {
    // Define an array of card data
    const cardsData = [
        {
            image: card1,
            title: "Master Money in Minutes!",
            description: "Detailed concepts, hands-on quizzes. Empowering you to master finance with ease!",
            buttonText: "Study & Learn",
            buttonLink: "/studylearn",
        },
        {
            image: card2,
            title: "Level up your financial knowledge through interactive games",
            description: "Learn while you play and master money management with fun!",
            buttonText: "Play Games",
            buttonLink: "/games",
        },
        {
            image: card3,
            title: "Plan your financial future with precision",
            description: "Calculate retirement funds, debt payoff, and more with our specially crafted calculators!",
            buttonText: "Calculators",
            buttonLink: "/calculators",
        },
        {
            image: card4,
            title: "Transform Your Finances",
            description: "Expert Tips, Quick Solutions. With FinGPT, financial planning is a breeze!",
            buttonText: "Ask Here!!",
            buttonLink: "/askhere",
        },
        {
            image: card5,
            title: "Budget like a boss",
            description: "Plan, Save, Modify with our Budget Planner. Take control of your finances effortlessly. Your financial freedom awaits!",
            buttonText: "Plan Your Budget",
            buttonLink: "/budgetplanner",
        },
        {
            image: card6,
            title: "Finance Unwrapped",
            description: "Your Podcast for Clear Money Insights Unveiling finance complexities, delivering clear insights of finances Tune in now!",
            buttonText: "Listen Now",
            buttonLink: "podcasts",
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " >
            {cardsData.map((card, index) => (
                <CardsHome
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    buttonLink={card.buttonLink}
                />
            ))}
        </div>
    );
};

export default CardsContent;
