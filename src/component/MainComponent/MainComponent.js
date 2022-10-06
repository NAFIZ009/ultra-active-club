import React from 'react';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import ActivityDetails from '../ActivityDetails/ActivityDetails';

const MainComponent = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-8">
                    <ActivityComponent/>
                </div>
                <div className="col-md-4">
                    <ActivityDetails/>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;