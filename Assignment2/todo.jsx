import React,{useState} from "react";
import './todo.css';


const MainContent = ({content}) => {
    return(
        <div className="main-content">
            <p>{content}</p>
        </div>
    )
}

const Sidenav = ({content}) => {
    return(
        <div className="side-nav">
            <p>{content}</p>
        </div>
    )
}

const UpdateToDo = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);


    const updateTask=() => {

        setTaskList([...taskList, task]);
        setTask("");
    }

    const delTask= (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index,1);
        setTaskList(updatedTaskList)
    }

    return(
    <div>
        <h1>TO-DO APP</h1>
        <div className = "container">
        <form>
        <input 
            className="input-box"
            type="text"
            value={task}
            onChange={(event)=>{setTask(event.target.value)}}
        />
            </form>
        <button onClick={updateTask}>ADD</button>

        </div>
        <br/>
        {taskList.map((item,i) => (
            <tr  key={i}>
                {/* <td>{item}</td> */}
                <div className="container">
                <Sidenav content={i + 1}/>
                <MainContent content = {item}/>
                <button onClick={()=>delTask(i)}>DEL</button> 
                </div>
            </tr>
        ))}
    </div>
    )
};

export default UpdateToDo;