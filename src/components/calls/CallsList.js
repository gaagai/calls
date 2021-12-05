import React, { useState, useEffect } from 'react';
import catchErrors from '../../helpers/catchErrors';
import axios from 'axios';
import CallItem from './CallItem';
import AddCall from './AddCall';
import { createCall } from '../../helpers/apiCalls';

const INITIAL_STATE = {
  callerId: '',
  date: '',
};

const CallsList = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [calls, setCalls] = useState([]);
  const [error, setError] = useState('');

  // Get Calls

  const getCalls = async () => {
    const response = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/calls`,
    });
    let data = response.data;
    console.log('DATA', data);
    setCalls(data);
  };

  useEffect(() => {
    getCalls();
  }, []);
  const handleChange = (event) => {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };
  const handleSubmit = async (event) => {
    console.log(values);
    try {
      await createCall(event, values);
    } catch (error) {
      catchErrors(error, setError);
    }
  };

  // const filteredCalls = calls.map(call =>{
  //   let mappedCalles = call.callerId.filter(callerId => {

  //   })
  // })

  return (
    <div className='calls-list'>
      <AddCall handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className='card-list'>
        {calls.length > 0 &&
          calls.map((call) => (
            <CallItem key={call._id} call={call} handleChange={handleChange} />
          ))}
      </div>
    </div>
  );
};

export default CallsList;
