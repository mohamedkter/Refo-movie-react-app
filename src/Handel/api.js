import axios from "axios";
const Token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzVjMGQzNDg3NTMyNGI4ZWVlYTA2NGQxYmFlNWZmOSIsInN1YiI6IjY0YTE2OTNjZDUxOTFmMDEzOTNlODhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSrpPiCM2H-TEA0S2Vbd7DUt84bOWqAoxYuvcLIsvz8';

const BaseUrl='https://api.themoviedb.org/3';
const head={
    Authorization:'bearer '+Token,
};

export const fatchApi= async (url,params)=>{
try{

    const {data} =await axios.get(BaseUrl+url ,{head,params});
    return data;
} catch(error){
    console.log(error);
    return error;
}



}