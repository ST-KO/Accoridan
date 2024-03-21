import { useState } from "react";

const Recursive = ({data}) => {
    
    const [isVisible, setIsVisible] = useState(data.map(() => false)); 

    console.log(isVisible);

    const expand = (index) => {
        setIsVisible(prevState => {
            const newVisibility = [...prevState];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        })
    };
    
    return(
        <div>
            {
                data.map((parent,index) => {
                    
                    return(
                        <div key={parent.label} style={{ paddingLeft: "40px" }}>
                            <span onClick={() => expand(index)}>
                                <p>{parent.label}</p>
                            </span>
                            {
                                parent.children && isVisible[index] ? 
                                <Recursive data={parent.children} /> :
                                <></>
                            }
                            
                        </div>

                        
                    );
                })
            }
        </div>
    );

};

export default  Recursive;