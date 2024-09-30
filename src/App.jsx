import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [curr,setcurr]=useState('dollar')
 const [amount,setAmount]=useState(0)
 const [conAmount,setConAmount]=useState(0)
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
      <div className=' ' >
        <div>
          <select>
            <label className='' 
            style={{color:"red", display:"flex", padding:"auto"}}>
              chooose currency
              </label>
            <option selected>dollar</option>
            <option >rupee</option>
          </select>
          <input placeholder='amount' 
          type='number'
          value={amount}
          onChange={(event)=>setAmount(event.target.value)}>
          </input>
          </div>
          <div>
          <select>
            <label className='' 
            style={{color:"red", display:"flex", padding:"auto"}}>
              chooose currency
              </label>
            <option >dollar</option>
            <option selected>rupee</option>
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
