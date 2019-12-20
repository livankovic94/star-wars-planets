import React from 'react'
import Button from './Button.js'

function SearchBar (props){
        return(
            <div>
                {console.log(props,'props searchbar')}
                <nav className='navbar navbar-light bg-light'>
                    <div>
                        <Button 
                        onClicked={props.onClicked} 
                        title={'Previous Page'} 
                        url={props.previousPage} />
                        
                        <Button 
                        onClicked={props.onClicked} 
                        title={'Return Home'} 
                        url={props.homePage} />
                        
                        <Button 
                        onClicked={props.onClicked} 
                        title={'Next Page'} 
                        url={props.nextPage} />
                    </div>
                    <div className='d-flex flex-row'>       
                     <input 
                        className='form-control mr-sm-2'
                        type='text' 
                        placeholder='Search planet by name' 
                        name='searchName' 
                        value={props.value} 
                        onChange={(event) => props.onChange(event)} 
                     />
                     <Button 
                        onClicked={props.onClicked} 
                        title={'Search'} 
                        url={props.searchURL} />
                    </div>   
                </nav>
            </div>    
        ) 
}

export default SearchBar