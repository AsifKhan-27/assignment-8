import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const{img,name,time}=props.activity;
    return (
        <div className='activity'>
            <img src={img} alt=""/>
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Activity;