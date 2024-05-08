import React, { Component } from 'react';
import Link from './Link'


function PathComponent(){
    const currentPath = window.location.pathname;
    
    function pathDisplay(currentPath){
        if(currentPath === '/'){
            return "Home"
        }else{
            currentPath = currentPath.substring(1)
            currentPath = currentPath.charAt(0).toUpperCase()+currentPath.substring(1);
            return currentPath
        }
    }

    const handlePathDirect = (segment) => {
        // Chuyển hướng người dùng đến đường dẫn tương ứng
        window.location.replace(currentPath);
    }
    return(
        <>
            
            <div className='App-link' >
                <span style={{color: '#050505b0', marginRight: '10px'}}>\</span>
                <span style={{ display: 'inline-block', marginRight:'10px' }}><Link onClick={handlePathDirect} text={pathDisplay(currentPath)}/></span>
            </div>
            
            

        </>

        
    )
}

export default PathComponent;