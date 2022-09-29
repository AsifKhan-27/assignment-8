import React from 'react';
import './Record.css';

const Record = () => {
    return (
        <div className='record'>
            <div className='user-details'>
                <h3>Nucky Thompson</h3>
            </div>
            <div className='break'>
                <h3>Add a Break</h3>
                <div className='break-btns'>
                    <button className='btn-break'>
                        <p className='btn-break-text'>10</p>
                    </button>
                    <button className='btn-break'>
                        <p className='btn-break-text'>20</p>
                    </button>
                    <button className='btn-break'>
                        <p className='btn-break-text'>30</p>
                    </button>
                    <button className='btn-break'>
                        <p className='btn-break-text'>40</p>
                    </button>
                </div>
            </div>
            <div className='activity-details'>
                <h3>Movie Details</h3>
                <p>Movie Time: min</p>
                <p>Break Time: min</p>
            </div>
            <button className='btn-completed'>
                <p className='btn-completed-text'>Activity Completed</p>
            </button>
        </div>
    );
};

export default Record;