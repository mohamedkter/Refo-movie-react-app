import { useEffect, useState } from "react";
import { fatchApi } from "./api";


const Fatchapi=(url)=>{
    const [data,setdata]=useState(null);
    useEffect(()=>{
        fatchApi(url+'?api_key=c35c0d34875324b8eeea064d1bae5ff9').then((res)=>{
setdata(res);
console.log(res);
        }).catch((er)=>{
            console.log("there is something wrong");
        })

        
    
    
    },[url]);

return data;
 }
 export default Fatchapi;