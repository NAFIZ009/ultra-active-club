import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import './ActivityComponent.css'

const ActivityComponent = ({setExercisesTime,exercisesTime}) => {
    const [exercises,setExercises] =useState([]);
    useEffect(() =>{
        fetch('fakeDb.json')
        .then(res=>res.json())
        .then(data=>setExercises(data));
    },[]);
    return (
        <div className='container mt-5 '>
            <h1 className='heading text-bolder'><FontAwesomeIcon icon="fa-solid fa-person-running" /> Activity-Tracker</h1>
            <p className='fw-bold mt-3'>Select Todays Exercise </p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    exercises.map(exercise => <DisplayData key={exercise._id} exercise={exercise} exercisesTime={exercisesTime} setExercisesTime={setExercisesTime}/>)
                        
                }
            </div>
        </div>
    );
};

export default ActivityComponent;