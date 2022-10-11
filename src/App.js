import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs';
import Inputtext from './components/Inputtext';
import Navbar from './components/Navbar';



function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState('null')

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert('null')
    }, 1700);
  }

  const toggle = ()=>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#230554';
      showAlert("Dark Mode Enabled","Success")
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","Success")
     }
  }
  return (
    <div >
      <Navbar title ="TextGood" mode={mode} toggle = {toggle} />
      <div >
      <Alert alert={alert}/>
      </div>
      <div className="container my-3" >
           
             {/* <AboutUs/> */}
             <Inputtext mode={mode} showAlert={showAlert} heading = "Enter Your Text" ></Inputtext>
            
      </div>
    </div>
  );
}

export default App;
