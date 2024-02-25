"use client";
import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useDispatch } from 'react-redux'
import { addDaily } from '../redux/slices/dailySlice';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
interface Props{
  className:String;
}
const DailyPlans = ({className}:Props) => {
  const dispatch = useDispatch()
  const plan = {
    content:"new plan",
  }
  const [plans,setPlans] = useState([])
  useEffect(()=>{
    const fetchPlans = async()=>{
      console.log("fetch daily plans")
      const res = await axios.get(`http://localhost:8800/api/dailyPlan/65d53c7db9bd7a03b030419d`)
      setPlans(res.data)
      console.log(res)
    }
    fetchPlans()
  },[])
  return (
    <div className={`${className}`}>
        <h3>Daily</h3>
        <Container>
          {plans.map(plan=>(
            <p>plan</p>
          ))}
            <div className='border-black border-[5px] w-5 h-5 m-5'></div>
        <button 
        type="button" 
        className='rounded-full w-5 h-5 bg-black'
        onClick={()=>{dispatch(addDaily(plan));toast.success(
          `${plan?.content.substring(0,12)}...created`
        )

        }}>add</button>
        </Container>
        <Toaster
        position='bottom-center'
        toastOptions={
          {
            success:{
              style:{
                background:'green',
                color:"#fffff",
              }
            },
            error:{
              style:{
                background:'red',
                color:"#000000",
              }
            }
          }

          
        }
        
        />
    </div>
  )
}

export default DailyPlans