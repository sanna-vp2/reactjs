import React from 'react';
import logo192 from './logo192.png';
import './Feed.css';
function Feed (){
    const addfeed=()=>{

    }
    return (
    <div className="container">    
    <div className="textbox">
        <textarea className="form-control" id="exampleForm" rows="3" placeholder= "write your feed"></textarea>
        <img className="img" src={logo192}/><br/>
        <button type="submit" className="btn btn-primary mb-2" onClick={ ()=>addfeed()} >Add</button>
    </div>
    </div>

    
    );
}
export default Feed;