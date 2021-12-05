import React from 'react';

const AddCall = (props) => {
  return (
    <>
      <h2>New Call</h2>
      <form onSubmit={props.handleSubmit} className='main-form'>
        <div className='input-center'>
          <label htmlFor='callerId'>Caller Id</label>
          <input
            autoFocus
            placeholder='Caller Id'
            onChange={props.handleChange}
            name='callerId'
            id='callerId'
            type='text'
            required
            lang='en'
          />
        </div>
        <div className='input-center'>
          <label htmlFor='date'>Date</label>
          <input
            placeholder='Date'
            onChange={props.handleChange}
            name='date'
            id='date'
            type='date'
            required
            lang='en'
          />
        </div>
        <button className='button-3' type='submit'>
          Add new call
        </button>
      </form>
    </>
  );
};

export default AddCall;
