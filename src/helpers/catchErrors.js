function catchErrors(error, displyError) {
  let errorMsg;
  if (error.response) {
    // the request was made and server responded with a status that is not 2xx
    errorMsg = error.response.data;
    console.error('Error! from Response', errorMsg);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error;
      console.error('Error! from Cloudinary', errorMsg);
    }
  } else if (error.request) {
    // the request was made but with no response
    errorMsg = error.request;
    console.error('Error request', errorMsg);
  } else {
    // somthing else happend
    errorMsg = error.message;
    console.error('Error message', errorMsg);
  }
  displyError(errorMsg);
}
export default catchErrors;
