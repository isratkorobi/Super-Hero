import React from 'react';
import './Prime.css'

const Prime = (props) => {
    console.log(props);
    const {name,img,age,salary,born} = props.prime;
    return (
        <div className="row">
            <div className="col">
                <div className="card h-80">
                <img className="image" src={img} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Name: {name}</h4>
                    <h4 className="card-title">Born:{born}</h4>
                    <h4 className="card-title">Age: {age}</h4>
                    <h4 className="card-title">Salary: {salary}</h4>
                    <div></div>
                    <button type="button" onClick={()=> props.handleAddToCart(props.prime)} className="btn btn-secondary center"><span><i class="fas fa-user"></i></span> Add Minster</button>
                </div>
                </div> 
            </div>
        </div>
        
    );
};

export default Prime;