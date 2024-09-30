import { useEffect, useState } from 'react'
import './App.css'
import useCurrencyApi from './hooks/useCurrencyApi'

function App() {
 const [curr,setcurr]=useState('usd')
 const [amount,setAmount]=useState(0)
 const [conAmount,setConAmount]=useState(0)

 let currencyKey =useCurrencyApi(curr)
 let options =Object.keys(currencyKey)

 let converter=()=>{
  let amoo=87*amount
  setConAmount(amoo)
 }

  useEffect(()=>{
    if(amount>=0)
      converter()
    else {
      setAmount(0)
    }
  },[amount])

  return (
    <>
      <div className=' '>
        <div >
          <select className='box'>  
           {
            options.map((currency)=>
              (<option key={currency}>{currency}</option>))
           }
          </select>
          <input placeholder='amount' 
          type='number'
          value={amount}
          onChange={(event)=>setAmount(event.target.value)}>
          </input>
          </div>
          <div >
          <select className='box'>
            {
              options.map((currency)=>
              (
                <option key={currency}>{currency}</option>
              ))
            } 
          </select>
          <input placeholder='amount' 
          type='number'
          readOnly
          value={conAmount}
          >
          </input></div>
        
      </div>
    </>
  )
}

export default App
