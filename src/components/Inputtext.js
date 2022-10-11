import React, {useState} from 'react'


export default function Inputtext(props) {
    const Upclick = ()=>{
        let newText = text.toUpperCase(); 
        settext(newText)
        props.showAlert("Congrats! Text converted to UpperCase","Success")
    }
    const Lowerclick = ()=>{
        let newText = text.toLowerCase(); 
        settext(newText)
        props.showAlert("Congrats! Text converted to LowerCase","Success")
    }
    const clear = ()=>{
        let newText = ''; 
        settext(newText)
        props.showAlert("Cleared","Success")
    }
    const handleonchange = (event)=>{
        settext(event.target.value);
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied Successfully!","Success")
    }
    const textCapitalize=()=>{
        const word = text.split(" ");
        // loop
        for (let i=0; i<word.length; i++){
            word[i]= word[i][0].toUpperCase() + word[i].substring(1);
        }
        settext(word.join(" "))
        props.showAlert("Congrats! Text is Capitalised","Success")
    }
    
    const [text, settext] = useState('');

  return (
    <>
    <div className="container" style ={{color : props.mode ==='dark'?'white':'#230554'}}>
        <h1>{props.heading }</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} height = "364px" placeholder='Enter your text here' onChange = {handleonchange} style = {{backgroundColor : props.mode ==='dark'?'#230554':'white',
        color : props.mode ==='dark'?'white':'#230554'}}  id="Textarea1" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Upclick}>
            Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Lowerclick}>
            Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={textCapitalize}>
            Capital text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>
            Clear text
        </button>
    </div>
    <div className="container my-5" style ={{color : props.mode ==='dark'?'white':'#230554'}}>
    <h1>Text Summary</h1>
    
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} letters</p>
    </div>
  </>
  )
}

