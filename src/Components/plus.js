import React from "react";
import "./style.css";
import Email from "./email";
import Sms from "./sms";


let objRef = "";
let TagName = "";
function Plus(props){
  let elements = {
    email: Email,
    sms:Sms
  }
  let keys = Object.keys(props.data);
  let values = Object.values(props.data);
  let [tag,setTag] = React.useState(false);
  
  let handleDrop = (event) => {
    
    event.preventDefault();
    event.stopPropagation();
    //let placeHolder="";
    //console.log();

    let el = event.dataTransfer.getData("text");
    //console.log(el);
    let placeHolder  = (<><li><div className={`workflow_card--add`} >
    <a href="#" onDragEnter={(event) => handleDragEnter(event)}><i className='icon icon-plus'></i></a>
    </div></li></>);
    
       
    
    
    if(keys.length === 1){
      objRef = {[el]:values[0]};
      props.data[keys[0]]=objRef;
      setTag(true);  
      TagName = elements[el];
    }
    
    console.log(keys , values);
  
    setstate(placeHolder);
    return;
  }

  let handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return;
  }


  let handleDragEnter = (event) =>{
    console.log("dragenter");
    let replace = (<li><div className="workflow_card--add --end"  onDragLeave = {handleDragLeave} onDrop={(event) => handleDrop(event)} onDragOver={(event) => handleDragOver(event)}>
    <div className="whitebox" data-popover="popover">
    </div>
    </div></li>);
    console.log(props.data);
    setstate(replace);
  }

  let handleDragLeave = (event) =>{
    console.log("dragleave");
    let placeHolder  = (<li><div className={`workflow_card--add --end`} >
    <a href="#" onDragEnter={(event) => handleDragEnter(event)}><i className='icon icon-plus'></i></a>
    </div></li>);
    setstate(placeHolder);
 }
    
    
//  if(keys[0] !== "plain"){
   
//  }


let [state, setstate] = React.useState(<li><div className={`workflow_card--add --end`}>
<a href="#" onDragEnter={(event) => handleDragEnter(event)}><i className='icon icon-plus'></i></a>
</div></li>);
  
    
            
    
return(<>{state}
        {tag === false? tag : <TagName data={objRef}/>}</>);
}

export default Plus;