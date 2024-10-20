import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import businessimg from '../assets/buisnessimg.jpg';
import businessimg2 from '../assets/businessimg2.jpg';
import businessimg3 from '../assets/businessimg3.jpg';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InsightsHome = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = 'https://newsdata.io/api/1/news?apikey=pub_5667614cf754bd2a4f7ea6a65d7f0a835e78e&q=finance%20news%20india&country=in&language=en&category=business';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setNews(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Fallback for hard-coded cards when there is an error
    const hardCodedNews = [
        {
            title: "Investment Strategies Unveiled April 28, 2024:",
            description: "Explore the top investment strategies that are reshaping the financial landscape. Get ready to invest like never before!",
            link: "#",
            image_url: businessimg,
        },
        {
            title: "Wealth Building Wisdom April 28, 2024:",
            description: "Learn the timeless principles of wealth creation from industry experts. Start building your financial empire today!",
            link: "#",
            image_url: businessimg2,
        },
        {
            title: "Mastering Money Mindset April 28, 2024:",
            description: "Unleash the power of positive thinking for financial success. Transform your mindset and watch your wealth grow.",
            link: "#",
            image_url: businessimg3,
        },
    ];

    const displayNews = error ? hardCodedNews : news;

    // Utility function to truncate text
    const truncateText = (text, length) => {
        return text.length > length ? `${text.slice(0, length)}...` : text;
    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 card on small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ 
            padding: '20px', 
            background: 'linear-gradient(to right, #A9D1EF, #6C8CC8)' 
        }}>
            <Slider {...settings}>
                {displayNews.map((article, index) => (
                    <Card key={index} sx={{ 
                        maxWidth: 345, 
                        backgroundColor: '#24385B', 
                        color: 'white', 
                        height: '500px'
                    }}>
                        <CardMedia
                            component="img"
                            alt={article.title}
                            height="140"
                            image={article.image_url || businessimg} 
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {article.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white' }}>
                                {truncateText(article.description, 100)} {/* Limit description to 100 characters */}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center'  }} > {/* Center the button */}
                            <Button size="small" href={article.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }} style={{fontSize:'15px' ,fontWeight:'bolder'}}>
                                Read More
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};

export default InsightsHome;
