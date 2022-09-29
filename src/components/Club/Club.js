import React, {useEffect, useState} from 'react';
import Activity from '../Activity/Activity';
import Record from '../Record/Record';
import './Club.css';

const Club = () => {
    const[activities,setActivities]=useState([]);
    
    useEffect( ()=>{
        fetch('MOCK_DATA.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    } ,[])

    return (
        <div className='club-container'>
           <div className='activities-container'>
               {
                   activities.map(activity=><Activity
                     key={activity.id} 
                     activity={activity}
                     ></Activity>)
               }
           </div>
           <div className='record-container'>
               {/* <Cart cart={cart}></Cart> */}
               <Record></Record>
           </div>
        </div>
    );
};

export default Club;