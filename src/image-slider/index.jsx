import {useState, useEffect} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css';

const ImageSlider = ({url, limit = 5}) => {
    
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const  fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            
            const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await res.json();

            if(data){
                setImages(data);
                setLoading(false);
            }
        }
        catch(error){
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        url && fetchImages(url);
    }, [url]);

    console.log(images)

    if(loading){
        return (
            <div>Loading data! Please wait</div>
        );
    }

    if(errorMessage !== null){
        return (
            <div>Error Occur! {errorMessage}</div>
        );
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
    
    return (
        <>
            <h1>Image Slider</h1>
            <div className="container">
                <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
                {
                    images?.map((item, index) => ( 
                        <img 
                            key={item.id}
                            src={item.download_url}
                            alt={item.download_url}
                            className={currentSlide === index ? 'current-image' : 'hide-current-image'}
                        />
                    ))
                }
                <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
                <span className='circle-indicators'>
                    {
                        images?.map((_,index) =>
                            <button 
                                key={index} 
                                className={
                                    currentSlide === index ? 
                                            'current-indicator' : 
                                            'current-indicator inactive-indicator'
                                }
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        )
                    }
                </span>
            </div>
        </>
        
    );
};

export default ImageSlider;