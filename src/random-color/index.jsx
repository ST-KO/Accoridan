import React from 'react';


const RandomColor = () => {
    
    const [colorType, setColorType] = React.useState('hex');
    const [color, setColor] = React.useState('#1111');
    
    const styles = {
        width: "100vw",
        height: "60vh",
        background: color,
    }

    // React.useEffect(() => {
    //     colorType === "rgb" ? createRandomRGBColor() : createRandomHexColor();
    // }, [colorType])

    const randomNumGenerator = (length) => {
        return (
            Math.floor(Math.random() * length)
        );
    }

    const createRandomHexColor = () => {
        setColorType('hex');
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            hexColor += hex[randomNumGenerator(hex.length)];
        }
        console.log(hexColor);
        setColor(prevColor => hexColor);
    };

    const createRandomRGBColor = () => {
        setColorType('rgb');
        const r = randomNumGenerator(256);
        const g = randomNumGenerator(256);
        const b = randomNumGenerator(256);

        let rgbColor = `rgb(${r}, ${g}, ${b})`;

        setColor(rgbColor);

        console.log(rgbColor);

    }
    
    return (
        <>
            <h1>Random Color Generator</h1>
            <div style={styles}>
                <div>
                    <button onClick={() => createRandomHexColor()}>Create HEX Color</button>
                    <button onClick={() => createRandomRGBColor()}>Create RGB Color</button>
                </div>
                
                <div>
                    <h1>{colorType}</h1>
                    <h3>{color}</h3>
                </div>

                {/* <button onClick={() => setColorType("hex")}>Create HEX Color</button>
                    <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
                    <button onClick={() => colorType === "hex" ? createRandomHexColor() : 
                                        createRandomRGBColor()
                    }>Generate Random Color</button>
                    <div>
                        <h1>{colorType === 'rgb' ? 'RGB' : "Hex"}</h1>
                        <h3>{color}</h3>
                    </div> */}
            </div>
        </>
    );
};

export default RandomColor;