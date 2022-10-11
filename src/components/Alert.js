import React from 'react'

function Alert(props) {
    // const capitlise = (word)=>{
    //     // const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    //   }
  return (
    <div style={{height: '50px'}}>
    { props.alert !== 'null' && <div className = "alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert

