export default function handleResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  }).then((response) => {
    console.log('Got a response from the API');
    return response;
  }).catch((error) => {
    console.log('Got a response from the API');
    throw error;
  });
}
