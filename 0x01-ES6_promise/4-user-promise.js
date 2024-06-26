export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName: firstName, lastName: lastName });
    } else {
      reject('Invalid name');
    }
  });
}
