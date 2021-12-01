import{useState} from "react";
import './App.css';
function App() {
  const [number,setNumber]=useState(0)
  const [items, setItems] = useState([])
  const [display, setDisplay] = useState(false)
  const [odd, setOdd] = useState(false)
  const [even, setEven] = useState(false)
  var arr=[]
  const handleSubmit=(e)=>{
    e.preventDefault()
    for(var i=1;i<=number;i++){
      arr.push(i)
      console.log(i)
    }
    setItems(arr)
  }
  const handleOdd=()=>{
    
      if(even===true || odd===false){
        setEven(false)
        setDisplay(true)
        setOdd(true)
      }
  }
  const handleEven=()=>{
    if(odd===true || even===false){
      setOdd(false)
      setDisplay(true)
      setEven(true)
    }
  }
  return (
    <div className="Appmain">
    <div className='Apptitle'>Number Filter</div>
    <form className="Appform" >
      <input className="Appinput2" onChange={e=>setNumber(e.target.value)} placeholder="Enter the number of inputs"/>
    <button className="Appbtn" onClick={handleSubmit}>Generate Random Numbers</button>
    </form>
    <div className="Apprandomnumbers">
      <ul className="Appnumberlist">
         {items.map((c)=>{
          return(<li className="Appnumberlistitem">{c}</li>)
        })} 
      </ul>
    </div>
    <div className="Appbtn2">
    <button className="Appbtnodd" onClick={handleOdd}>ODD</button>
    <button className="Appbtneven "  onClick={handleEven}>EVEN</button></div>
    {(display===true && odd===true) ? (<><div className="Appfooter">Filtered Array </div>
    <div className="Apprandomnumbers">
      <ul className="Appnumberlist">
      {items.map((c)=>{
        if(c%2!==0)
          return(<li className="Appnumberlistitem">{c}</li>)
        })} 
      </ul>
    </div></>):(<div></div>)}
    {(display===true && even === true)?(<><div className="Appfooter">Filtered Array </div>
    <div className="Apprandomnumbers">
      <ul className="Appnumberlist">
      {items.map((c)=>{
        if(c%2===0)
          return(<li className="Appnumberlistitem">{c}</li>)
        })} 
      </ul>
    </div></>):(<div></div>)}
    </div>
  );
}

export default App;
