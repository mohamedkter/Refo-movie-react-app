
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzVjMGQzNDg3NTMyNGI4ZWVlYTA2NGQxYmFlNWZmOSIsInN1YiI6IjY0YTE2OTNjZDUxOTFmMDEzOTNlODhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSrpPiCM2H-TEA0S2Vbd7DUt84bOWqAoxYuvcLIsvz8'
    }
  };

  export const FetchApi=(url)=>{
    return fetch(`https://api.themoviedb.org/3/${url}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));

  }
  