import react,{useState} from "react"
import "./calc.css"

const Calc=()=>{

 const [result,setResult]=useState("")

 const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
 }

 const cleardisplay=()=>{
    setResult("")
 }

 const calculate=()=>{
    setResult(eval(result).toString())
 }

    return(
        <div className="calc">
            <input type="text" placeholder="0" id="answer" value={result}></input>
            {/* <input type="button " value="9" className="button" onClick={clickHandler}></input> */}
            <button  value="9" className="button" onClick={clickHandler}>9</button>
            <button  value="8" className="button" onClick={clickHandler}>8</button>
            <button  value="7" className="button" onClick={clickHandler}>7</button>
            <button  value="6" className="button" onClick={clickHandler}>6</button>
            <button  value="5" className="button" onClick={clickHandler}>5</button>
            <button  value="4" className="button" onClick={clickHandler}>4</button>
            <button  value="3" className="button" onClick={clickHandler}>3</button>
            <button  value="2" className="button" onClick={clickHandler}>2</button>
            <button  value="1" className="button" onClick={clickHandler}>1</button>
            <button  value="0" className="button" onClick={clickHandler}>0</button>
            <button  value="." className="button" onClick={clickHandler}>.</button>
            <button  value="+" className="button" onClick={clickHandler}>+</button>
            <button  value="-" className="button" onClick={clickHandler}>-</button>
            <button  value="/" className="button" onClick={clickHandler}>/</button>
            <button  value="*" className="button" onClick={clickHandler}>*</button>
            <button  value="%" className="button" onClick={clickHandler}>%</button>
            <button  value="clear" className="button button1" onClick={cleardisplay}>clear</button>
            <button  value="=" className="button button1" onClick={calculate}>=</button>
            {/* <input type="button " value="8" className="button" onClick={clickHandler}></input>
            <input type="button " value="7" className="button" onClick={clickHandler}></input>
            <input type="button " value="6" className="button" onClick={clickHandler}></input>
            <input type="button " value="5" className="button" onClick={clickHandler}></input>
            <input type="button " value="4" className="button" onClick={clickHandler}></input>
            <input type="button " value="3" className="button" onClick={clickHandler}></input>
            <input type="button " value="2" className="button" onClick={clickHandler}></input>
            <input type="button " value="1" className="button" onClick={clickHandler}></input>
            <input type="button " value="0" className="button" onClick={clickHandler}></input>
            <input type="button " value="." className="button" onClick={clickHandler}></input>
            <input type="button " value="+" className="button" onClick={clickHandler}></input>
            <input type="button " value="-" className="button" onClick={clickHandler}></input>
            <input type="button " value="/" className="button" onClick={clickHandler}></input>
            <input type="button " value="*" className="button" onClick={clickHandler}></input>
            <input type="button " value="%" className="button" onClick={clickHandler}></input>
            <input type="button " value="clear" className="button button1" onClick={cleardisplay}></input>
            <input type="button " value="=" className="button button1" onClick={calculate}></input> */}
        </div>
    )
}

export default Calc;