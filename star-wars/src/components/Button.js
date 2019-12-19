import React from 'react'

function Button(props){
    return(
        <button 
                  className="btn btn-outline-success my-2 my-sm-0 "
                  onClick={() => props.onClicked(props.url)} 
                  disabled={ !props.url } >  
                  {props.title}  
        </button>    
    )
}
export default Button