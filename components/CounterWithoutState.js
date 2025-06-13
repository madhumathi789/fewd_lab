function CounterWithoutState(){    
    let a=10;
    function increment(){
        a=a+1;
        console.log(a);
    }
    return(
        <div>
    <h2> Welcome to counter program</h2>
    <h2>{a}</h2>
    <button onClick={increment}>+</button>
    </div>
    );
}
export default CounterWithoutState;
