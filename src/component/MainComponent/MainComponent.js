import React, { useEffect } from 'react';
import { useState } from 'react';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import { LsGetData } from '../utilits/LsFun';

const MainComponent = () => {
    const [exercisesTime,setExercisesTime] = useState(0);
    const [LsexerciseInfo,setLsExercisesInfo] = useState({});
    useEffect(() =>{
        localStorage.getItem('exerciseInfo') && LsGetData(setLsExercisesInfo);
    },[]);
    return (
        <div className='container container-custom'>
            <div className='row'>
                <div className="col-lg-4 order-lg-2">
                    <ActivityDetails exercisesTime={exercisesTime} lsexerciseInfo={LsexerciseInfo}/>
                </div>
                <div className="col-lg-8 order-lg-1">
                    <ActivityComponent setExercisesTime={setExercisesTime}/>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;