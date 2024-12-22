import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32'></img>
                <p className='w-full md:w-2/3 text-gray-600'>
                    this is forever site and welcome you all for a premium experience for 
                </p>
            </div>
            <div>
                <p className='text-x1 font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery </li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-2123-212</li>
                    <li>contact@forever.com</li>
                     
                </ul>
            </div>

            </div>
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2024@forever.com-All rights reserved</p>
                </div> </div>
  )
}

export default Footer