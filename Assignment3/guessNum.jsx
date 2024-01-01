import React,{useState,useEffect} from "react";
import './guess.css';

const MainContent = ({content}) => {
    return(
        <div  className="main-content">
            <p>{content}</p>
        </div>
    )
}

const GuessNumber = () => {

    const [num, setNum] = useState();
    const [show, setShow] = useState(0);
    const [temp, setTemp] = useState();
  
    useEffect(() => {
      setNum('');
      setTemp(Math.floor(Math.random(100)*20));
    }, []);
  
    useEffect(() => {
      console.log("useEffect is run for [num]", num);
      console.log(typeof(num));

      console.log(temp);
        if (Number(num) === temp) {
            setShow("HAPPY! HAPPY! HAPPY!");
        }
        else if(num === ''){
            setShow('');
        }
        else if(Number(num) < temp){
            setShow("MOYE! MOYE! : I AM HIGHER")
        }
        else{
            setShow("MOYE! MOYE! : I AM LOWER");
        }
    }, [num]);

    const handleEvents = (e) => {
        e.preventDefault();
    }

    return(
    <div>
        <h1>GUESS THE NUMBER</h1>
        <div>
        <form>
        <input 
            className="input-box"
            type="Number"
            value={num}
            onChange={(event)=>{setNum(event.target.value)}}
        />
            </form>

        {/* <button onClick={(e)=>setNum(temp)}>GUESS</button> */}
        <br/>
        </div>
        <MainContent content = {show}></MainContent>
    </div>
    )
};

export default GuessNumber;