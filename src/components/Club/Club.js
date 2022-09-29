import React, {useEffect, useState} from 'react';
import Activity from '../Activity/Activity';
import Record from '../Record/Record';
import './Club.css';

const Club = () => {
    const[activities,setActivities]=useState([]);
    const [record,setRecord]=useState([]);

    useEffect( ()=>{
        fetch('MOCK_DATA.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    } ,[])

    // useEffect( ()=>{} ,[])

    const handleAddToList=(activity)=>{
        // record.push(activity);
        const newRecord=[...record,activity];
        setRecord(newRecord);
    }
    return (
        <div className='club-container'>
           <div className='activities-container'>
               {
                   activities.map(activity=><Activity
                     key={activity.id} 
                     activity={activity}
                     handleAddToList={handleAddToList}
                     ></Activity>)
               }
           </div>
           <div className='record-container'>
               <Record record={record}></Record>
           </div>
        </div>
    );
};

export default Club;