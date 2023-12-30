import React,{useState} from 'react';
import './todo.css'
const Appender = () =>{

    const [name, setName] = useState([]);
    const [singleText, setSingleText] =useState("")

    const appendAdditions = () =>{
      console.log("clicked");
      setName([...name, singleText]);
      setSingleText("")
    }

    return(
        <div>
        <div className='container'>
        <form>
        <input
            type={"text"}
            value={singleText}
            onChange={(event)=>setSingleText(event.target.value)}
        />
        </form>
        
        <button onClick={appendAdditions}>ADD</button>
        </div>

        {name.map((item) => (
          <tr key={item}>
            <td>{item}</td>
          </tr>
        ))}
        </div>
        
    );
};

export default Appender;