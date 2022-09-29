import React from 'react';

const Record = () => {
    return (
        <div>
            <div className='user-details'>
                <h3>Nucky Thompson</h3>
            </div>
            <div className='break'>
                <h3>Add a Break</h3>
                <div className='break-btns'>
                    <button>
                        <p>10</p>
                    </button>
                    <button>
                        <p>10</p>
                    </button>
                    <button>
                        <p>10</p>
                    </button>
                </div>
            </div>
            <div className='activity-details'>
                <h3>Movie Details</h3>
                <p>Movie Time: </p>
                <p>Break Time: </p>
            </div>
            <button>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Record;