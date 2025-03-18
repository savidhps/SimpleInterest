import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [principle,setPrinciple ] = useState('')
  const [rate,setRate ] = useState('')
  const [year,setYear ] = useState('')
  const [interest,setInterest ] = useState('')

  // for checking valid number or not 
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  const validate=(e)=>{
    const {name,value}=e.target
    console.log(name);
    console.log(value);
    
    // console.log(value.match('^[0-9]*$'));
    if (!!value.match('^[0-9]*$')) {
      if (name=='principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }else if(name=="rate"){
        setRate(value)
        setIsRate(true)
      }else{
        setYear(value)
        setIsYear(true)
      }
    }else{
      if (name=='principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }else if(name=="rate"){
        setRate(value)
        setIsRate(false)
      }else{
        setYear(value)
        setIsYear(false)
      }
    }
  }
  const handleReset=()=>{
    setPrinciple('')
    setIsPrinciple(true)
    setRate('')
    setIsRate(true)
    setYear('')
    setIsYear(true)
    setInterest(0)
  }
  const handleCalculate=()=>{
    setInterest((principle*rate*year)/100)
  }

  return (
      <div className="contaniner text-center">
        <h2 className='mt-3'> Simple Intrest App</h2>
        <p> Calculate your simple interest easily</p>
        <div className='result-box'>
          ₹ <span id="result">{interest}</span>
          <br />
          <small>Total simple interest</small>
        </div>
        {/* <input type="number" class="form-control mt-3" placeholder='Principle amoutnt' />
        <input type="number" class="form-control mt-3" placeholder="Rate of Interest (%)" />
        <input type="number" class="form-control mt-3" placeholder="Year (Yr)" />
        <button className='btn btn-success mt-3 me-5'>CALCULATOR</button>
        <button className='btn btn-outline-primary mt-3 ms-5'>RESET</button> */}

        <div className="mb-3 mt-3">
        <TextField name='principle' value={principle} id="outlined-basic" label="Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
          {isPrinciple==false&&<span className='text-danger'> Invalid input</span>}
        </div>
        <div className="mb-3">
        <TextField name='rate' value={rate} id="outlined-basic" label="Rate of Interest (%)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
        {isRate==false&&<span className='text-danger'> Invalid input</span>}
        </div>
        <div className="mb-3">
        <TextField name='year' value={year} id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        {!isYear==true&&<span className='text-danger'> Invalid input</span>}
        </div>
        <div className="mb-3">
        <Button variant="contained" className='me-2 p-2' color='success'style={{width:'150px'}} onClick={handleCalculate}>CALCULATE</Button>
        <Button variant="outlined" className='ms-2 p-2' style={{width:'150px'}} onClick={handleReset}>RESET</Button>
        </div>

      </div>
  )
}

export default App
