import React,{useState, createContext,useContext} from "react";
import './guess.css';

const FruitContext = createContext('Apple');

const BaseComponent = () => {

    return(
        <div className="container">
            <h1>I am BaseComponet</h1>
            <FruitContext.Provider value = 'Mango'>
                <ChildA/>
            </FruitContext.Provider>

        </div>
    );
};

const ChildA = () => {
    return(
        <div className="container">
            <h1>I am ChildA</h1>
            <ChildB/>
        </div>
    );
};

const ChildB = () => {

    const fruitName = useContext(FruitContext);
    return(
        <div className="container">
            <h1>I am ChildB</h1>
            <p>Fruit Name from base: {fruitName}</p>
        </div>
    );
};

export default BaseComponent;