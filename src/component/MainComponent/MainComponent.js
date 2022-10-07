import React, { useEffect } from 'react';
import { useState } from 'react';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const MainComponent = () => {
    const [exercisesTime,setExercisesTime] = useState(0);
    const [LsexerciseInfo,setLsExercisesInfo] = useState({});
    useEffect(() =>{
        !localStorage.getItem('exerciseInfo') && localStorage.setItem('exerciseInfo', JSON.stringify({
            breakTime:0,
            exerciseTime:0
        }));
        localStorage.getItem('exerciseInfo') && setLsExercisesInfo(JSON.parse(localStorage.getItem('exerciseInfo')));
    },[]);
    return (
        <div className='container container-custom'>
            <div className='row'>
                <div className="col-lg-4 order-lg-2">
                    <ActivityDetails exercisesTime={exercisesTime}  LsexerciseInfo={LsexerciseInfo}/>
                </div>
                <div className="col-lg-8 order-lg-1">
                    <ActivityComponent exercisesTime={exercisesTime}  setExercisesTime={setExercisesTime}/>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;