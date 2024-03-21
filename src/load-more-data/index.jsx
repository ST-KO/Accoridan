import {useState, useEffect} from 'react';
import './styles.css';

const LoadMoreData = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    const fetchProducts = async () => {
        try{
            setLoading(true);
            const res = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            
            const result = await res.json();

            console.log(result);

            if(result && result.products && result.products.length){
                setProducts(prevProducts => [...prevProducts, ...result.products]);
                setLoading(false);
            }
        }
        catch(e){
            console.log(e.message);
            setLoading(false);
            setError(e.message);
        }
    };
    
    useEffect(() => {
        fetchProducts();
    }, [count]);

    const checkProductCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        if(products && products.length === 100){
            setDisableButton(true);
        }
    }, [products]);

    if(loading){
        return (
            <div>Loading data! Please wait.</div>
        );
    }

    if(error !== null){
        return (
            <div>Error Occur! ${error}</div>
        );
    }
    
    return (
        <>
            <h1>Load More Data</h1>
            <div className="load-more-container">
                <div className='product-container'>
                    {
                        products.map(item => 
                            <div key={item.id} className='product'>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )
                    }
                </div>
                <div className='button-cointainer'>
                    <button disabled={disableButton} onClick={checkProductCount}>
                        Load More Products
                    </button>
                    {disableButton ? <p>You have reached to 100 products</p> : null}
                </div>
            </div>
        
        </>
    );
};

export default LoadMoreData;