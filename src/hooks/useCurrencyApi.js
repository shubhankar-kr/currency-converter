import { useState,useEffect } from "react"

function useCurrencyApi(props){
    const [data,setData]=useState({})
    // useEffect(()=>{
       
    // },[props])
    // //console.log(data);
     fetch(`https://latest.currency-api.pages.dev/v1/currencies/${props}.json`)
        .then((data)=>data.json())
        .then((data)=>(setData(data[props])))
        
        .catch((error)=>console.log(error))
    return data;
}
export default useCurrencyApi;
