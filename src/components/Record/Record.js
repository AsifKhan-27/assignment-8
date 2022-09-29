import React, { useState } from 'react';
import './Record.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

const Record = (props) => {
    const{record}=props;
    let movieTime=0;
    let breakTime=0;
    for(const activity of record){
        movieTime=movieTime+parseInt(activity.time);
    }
    const[brek,setBrek]=useState(0);
    const addBreak10=()=>{
        setBrek(10);
    }
    const addBreak20=()=>{
        setBrek(20);
    }
    const addBreak30=()=>{
        setBrek(30);
    }
    const addBreak40=()=>{
        setBrek(40);
    }
    const notify=()=>{
        alert('Congratulations on completion !')
    }
    return (
        <div className='record'>
            <div className='user-details'>
                <h3>Nucky Thompson</h3>
            </div>
            <div className='break'>
                <h3>Add a Break in minutes</h3>
                <div className='break-btns'>
                    <button onClick={addBreak10} className='btn-break'>
                        <p className='btn-break-text'>10</p>
                    </button>
                    <button onClick={addBreak20} className='btn-break'>
                        <p className='btn-break-text'>20</p>
                    </button>
                    <button onClick={addBreak30} className='btn-break'>
                        <p className='btn-break-text'>30</p>
                    </button>
                    <button onClick={addBreak40} className='btn-break'>
                        <p className='btn-break-text'>40</p>
                    </button>
                </div>
            </div>
            <div className='activity-details'>
                <h3>Movie Details</h3>
                <p>Movie Time: {movieTime}min</p>
                <p>Break Time: {brek}min</p>
            </div>
            <button onClick={notify} className='btn-completed'>
                <p className='btn-completed-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Record;