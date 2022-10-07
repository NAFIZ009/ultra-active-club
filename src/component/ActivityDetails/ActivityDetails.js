import React from 'react';
import './ActivityDetails.css';
import img from '../../img/personImg.jpg';

const ActivityDetails = ({setBreakTime}) => {
    const {exerciseTime,breakTime}=JSON.parse(localStorage.getItem('exerciseInfo')) || {
            breakTime:0,
            exerciseTime:0
    };
    
    function breakClickHandler(e) {
        const breakValue=e.target.innerHTML;
        setBreakTime(parseInt(breakValue.slice(0,2)));
        [...e.target.parentElement.children].forEach(element=>{
            element.style.backgroundColor='#ffff';
            element.style.color='#000000';
        
    })
        e.target.style.backgroundColor='#6F2DBD';
        e.target.style.color='#ffff';
        let exerciseInfo = JSON.parse(localStorage.getItem('exerciseInfo'));
        localStorage.setItem('exerciseInfo', JSON.stringify({...exerciseInfo,
            breakTime:parseInt(breakValue.slice(0,2))
        }));
    }
    return (
        <div className='mt-5'>
            <div className="personal-info">
                <div className="primary-details">
                    <div className="img-cont">
                        <img src={img} className='img-container-cunstom' alt="" />
                    </div>
                    <div className="name-cont">
                        <h3>Nafiz</h3>
                        <small>Halishahar,Chittagong</small>
                    </div>
                </div>
                <div className="aditional-details">
                <div className="weight">
                    <h3>70kg</h3><small>Weight</small>
                    </div>
                    <div className="height">
                    <h3>6.00</h3><small>Height</small>
                    </div>
                    <div className="age">
                    <h3>22years</h3><small>Age</small>
                    </div>
                </div>
            </div>
            <div className="break-container mt-4">
                <h3>Add A Break</h3>
                <div className="aditional-details breaks-btn mt-3">
                    <button onClick={breakClickHandler}>10s</button>
                    <button onClick={breakClickHandler}>20s</button>
                    <button onClick={breakClickHandler}>30s</button>
                    <button onClick={breakClickHandler}>40s</button>
                </div>
            </div>
            <div className="exercise-details mt-5">
                <h3>Exercise Details</h3>
                <div className="exercise-time mt-3 w-100 d-flex justify-content-between px-4 align-items-center py-3">
                    <h5>Exercise Time</h5><h5>{exerciseTime}s</h5>
                </div>
                <div className="break-time mt-3 w-100 d-flex justify-content-between align-items-center px-4 py-3">
                    <h5>Break Time </h5><h5>{breakTime}s</h5>
                </div>
            </div>
            <button className='btn btn-primary w-100 d-block mx-auto mt-5' >
            Activity Completed
            </button>
        </div>
    );
};

export default ActivityDetails;