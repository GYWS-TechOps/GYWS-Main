import React, { useContext } from 'react'
import Aim from "./assets/Aim.jpg"
import Objective from "./assets/Objective.jpg"
import Card from './components/Card'
import { MyContext } from "./context/Context"
import Pencil from "./assets/Pencil.svg"



export default function Rise() {
  const items = useContext(MyContext)
  console.log(MyContext)

  return (
    <>
      <div className="heading font-bold text-orange-600 text-5xl font-serif mt-4 mb-10 ml-[40%] flex items-center">
       <p className='mr-[-15px]'> R</p><img src={Pencil} alt="" /><p className='mr-4 ml-[-15px]'>I</p><p className='mr-4'>S</p><p className='mr-4'>E</p>
      </div>
      {/* <div className='flex'>
        <img className='w-[40%] h-[500px] mx-[5%]  rounded-lg shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-5xl hover:shadow-orange-700 hover:scale-105' src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/123110027_4016406935077499_8301956886895378414_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=sjlhuS4BDc8Q7kNvgH6ND-M&_nc_ht=scontent-bom1-2.xx&oh=00_AYC9T0SbILq2ERAr-aqVBy8Dt76jwC6izzp-6BLAkbh7Ig&oe=66D469C8" alt="" />

        <img className='w-[40%] h-[500px] mx-[5%] rounded-lg shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-5xl hover:shadow-orange-700 hover:scale-105' src="https://scontent-bom2-3.xx.fbcdn.net/v/t1.6435-9/123030286_4016406785077514_1067295421906050567_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=LvsfoueAp8sQ7kNvgH7icxZ&_nc_ht=scontent-bom2-3.xx&oh=00_AYDjEIT4xtsUyDBUI2ECQM4vSJ6nnk3sZO1BYuyn9CtIEw&oe=66D47D78" alt="" />
      </div> */}

      <div className="aim my-5 flex border-[6px] border-blue-600 w-[80%] mx-auto p-4 rounded-lg  items-center gap-[2%] shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-700 hover:scale-105 mb-8">
        <img className='w-[150px]' src="https://light.org.in/img/1.png" alt="" />
        <div className='flex flex-col gap-4'>
          <div className="head font-bold text-3xl text-orange-500">OUR AIM</div>
          <div className="content font-semibold">
            We aim to reform our education system by shifting it towards an <b>Organic learning</b> approach and ensuring <b>Holistic Development</b>.
          </div>
        </div>
        <img className='w-[50%] h-[300px] mx-[5%] rounded-lg ' src={Aim} alt="" />
      </div>

      <div className="objective flex flex-col items-center border-[6px] border-orange-600 w-[80%] rounded-lg mx-auto p-4 shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500 hover:scale-105 mt-16 gap-5">
        <div className="head font-bold text-3xl text-blue-500"> OUR OBJECTIVES</div>
        <img className='w-[80%] h-[400px] rounded-lg' src={Objective} alt="" />
      </div>
      <div className="heading text-green-600 font-bold text-3xl font-serif mt-10 mb-10 text-center">OUR INITIATIVES</div>
      <div className=' flex flex-col justify-around'>
        {
          items.map(item => {
            return (
              <Card src={item.image} description={item.description} title={item.title} border={item.border} bgcolor={item.bgcolor} shadow={item.shadow} />
            )
          })
        }
      </div>

    </>
  )
}