import React,{useState} from 'react';
function Hooks(){
    const [a,seta]=useState('First suvash');//React.useState('sth) yo syntax is to impofor one time use only
    return(
        <div>
        <h1>{a} </h1>
        </div>
    )
}
export default Hooks;