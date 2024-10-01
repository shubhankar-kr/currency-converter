import { useEffect, useState } from 'react'
import './App.css'
import useCurrencyApi from './hooks/useCurrencyApi'

function App() {
 const [curr,setcurr]=useState('usd')
 const [amount,setAmount]=useState(0)
 const [conAmount,setConAmount]=useState(0)
 const [currVal,setCurVal]=useState(0)
 const [currTo,setCurrTo]=useState('inr')
 let currencyKey =useCurrencyApi(curr)
 let options =Object.keys(currencyKey)

 let converter=()=>{
  setConAmount(currVal*(amount))
 }
  useEffect(()=>{
    if(amount>=0) {
    // setCurVal(currencyKey[currTo]);       // without checking it for undefined it won't work
    // console.log(currencyKey[currTo]);
      if (currTo && currencyKey[currTo]!==undefined) {
        setCurVal(currencyKey[currTo]);
        console.log(currencyKey[currTo]);
        converter()
      }
    }
    else {
      setAmount(0)
    }
  },[amount,currVal,curr,currTo])

  return (
    <>
      <div className=' '>
        <div >
          <select className='box' onChange={(e)=>setcurr(e.target.value)} 
          value={curr}>  
           {
            options.map((currency)=>
              (<option key={currency} value={currency}>{currency}</option>))
           }
          </select>
          <input placeholder='amount' 
          type='number'
          value={amount}
          onChange={(event)=>setAmount(event.target.value)}>
          </input>
          </div>
          <div >
          <select className='box' onChange={(e)=>setCurrTo((e.target.value))}
            value={currTo}>
            {
              options.map((currency)=>
              (
                <option key={currency} value={currency}>{currency}</option>
              ))
            } 
          </select>
          <input placeholder='amount' 
          type='number'
          readOnly
          value={conAmount}
          >
          </input></div>
          {/* <input type='submit' onSubmit={()=>converter()}></input> */}
      </div>
    </>
  )
}

export default App
