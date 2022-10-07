import React, { useEffect, useState } from 'react';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const MainComponent = () => {
    const [exerciseTime,setExerciseTime]=useState(0);
    const [breaksTime,setBreakTime]=useState(0);
    useEffect(() =>{
        !localStorage.getItem('exerciseInfo') && localStorage.setItem('exerciseInfo', JSON.stringify({
            breakTime:0,
            exerciseTime:0
        }));
    },[]);
    return (
        <div className='container container-custom'>
            <div className='row'>
                <div className="col-lg-4 order-lg-2">
                    <ActivityDetails setBreakTime={setBreakTime} breakTime={breaksTime}/>
                </div>
                <div className="col-lg-8 order-lg-1">
                    <ActivityComponent exerciseTime={exerciseTime} setExerciseTime={setExerciseTime}/>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;