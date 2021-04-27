import React from 'react';
import logo192 from './logo192.png';

function Feed (){
    return (
    <div>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="submit" className="btn btn-primary mb-2" >Add</button>
        <img className="img" src={logo192}/>



    </div>


        );
}
export default Feed;