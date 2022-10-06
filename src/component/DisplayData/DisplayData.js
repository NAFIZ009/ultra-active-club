import React from 'react';
import './DisplayData.css'

const DisplayData = ({exercise}) => {
    const {text,picture,name,forAge,time}=exercise;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <h6>For Age : {forAge}</h6>
                        <h6>Time Required : {time}</h6>
                        <button>
                            Add To List
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default DisplayData;