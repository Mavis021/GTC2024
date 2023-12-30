import React,{useState} from "react";


function UpdateClickCount(counter){
    const [count, setCount] = useState(0);
    //const [buttonClicked, setClick] = useState(buttonClicked = 'false')

    const incrementCount = () => {
        
        setCount(count + 1);
    }

    const decrementCount = (props) => {
        if(count > 1)
            setCount(count - props);
    }

    const handleClick = (props) => {
        setCount(count + props);
    }

    return(
        <div>
            <button onClick={()=>handleClick(1)}> Click!</button>
            <button onClick = {()=>handleClick(-2)}>-2</button>
            <h2>The button has been clicked {count} Times</h2>
        </div>
    );
};

export default UpdateClickCount;