import React from 'react';
import './DisplayData.css'

const DisplayData = ({exercise,setExercisesTime}) => {
    const {text,picture,name,forAge,time}=exercise;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <h6>For Age : {forAge}</h6>
                        <h6>Time Required : {time}s</h6>
                        <button className='btn-custom' onClick={()=>setExercisesTime(prev=>prev+parseInt(time))}>
                            Add To List
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default DisplayData;