import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleSignupAndUpload(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);

  return Promise.allSettled([userPromise, photoPromise]).then((results) => results.map((result) => (result.status === 'fulfilled'
    ? result.value
    : { status: result.status, reason: result.reason.message })));
}
