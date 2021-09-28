import React from 'react';
import './Prime.css'

const Prime = (props) => {
    console.log(props);
    const {name,img,age,salary,born,country,nationality} = props.prime;//distrucuring prime
    return (
        <div className="row">
            <div className="col">
                <div className="card h-80">
                <img className="image" src={img} alt=""/>
                <div className="card-body">
                    <h1 className="card-title-h1">State: <span className="data"> {country}</span></h1>
                    <h4 className="card-title-h1">Name: <span className="data">{name}</span></h4>
                    <h4 className="card-title-h1">Born: <span className="data">{born}</span></h4>
                    <h4 className="card-title-h1">Age: <span className="data">{age}</span></h4>
                    <h4 className="card-title-h1">Nationality: <span className="data"> {nationality}</span></h4>
                    <h4 className="card-title-h1">Salary: <span className="data"> {salary}</span></h4>
                    <div></div>
                    <button type="button" onClick={()=> props.handleAddToCart(props.prime)} className="btn btn-secondary center"><span><i className="fas fa-user"></i></span>  Add Minster</button>
                </div>
                </div> 
            </div>
        </div>
        
    );
};
/* added prime card content */
export default Prime;