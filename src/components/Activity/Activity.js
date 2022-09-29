import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {handleAddToList, activity}=props;
    const{img,name,time}=activity;
    return (
        <div className='activity'>
            <img src={img} alt=""/>
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>Duration: {time}min</p>
            </div>
            <button onClick={()=>handleAddToList(activity)} className='btn-add'>
                <p className='btn-add-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;