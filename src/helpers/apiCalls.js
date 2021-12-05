import axios from 'axios';

// Create new call

export async function createCall(event, values) {
  event.preventDefault();
  const callerId = values.callerId;
  const date = values.date;

  const response = await axios({
    method: 'POST',
    url: `${process.env.REACT_APP_API}/call-create`,
    data: { callerId: callerId, date: date },
  });
  const data = await response.data;
  console.log('DATA', data);
}
