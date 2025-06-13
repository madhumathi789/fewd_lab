import './Eventhandling.css';


function Eventhandling(){
    {/*State: either variables/data or functions */}
    {/* function expression */}
    {/* passing a parameter */}
    const eventdemo=(x)=> {
        alert("event handling in reactJS with a parameter "+x);
        console.log("event in reactjs with a param ",x)
    }
    
    return(
        <div className="Eventhandling"> 
            <h1> Welcome to event handling</h1>
            {/* <button onClick={eventdemo}> click </button> */}
            <button onClick={()=>eventdemo(100)}> click </button> 
            {/* <button onClick={alert("This is onload not onClick")}> click </button> */}
        </div>
    );


}
export default Eventhandling;

