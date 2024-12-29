 import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
 
 const About = () => {
   return (
     <div> 
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img}></img>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is a modern clothing website that focuses on providing stylish and affordable fashion for all ages and preferences. It features a wide range of products, including casual wear, formal attire, activewear, and accessories.</p>
        <p> The website offers a seamless shopping experience, with intuitive navigation, detailed product descriptions, and secure payment options. </p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Forever, our mission is to empower individuals to express their unique style through affordable and high-quality fashion. We are dedicated to inclusivity, offering a diverse range of styles and sizes to ensure everyone feels confident and represented. By providing trendy clothing at accessible prices, we make fashion attainable for all.</p>

        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>t Forever, quality is at the core of everything we do. We are committed to providing products that meet the highest standards of design, durability, and craftsmanship. Our quality assurance process starts with selecting premium fabrics and materials from trusted suppliers, ensuring comfort and longevity.  </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Convience:</b>
          <p className='text-gray-600'> At Forever, we prioritize convenience in every aspect of the shopping experience to make it easy for you to find exactly what you're looking for. Our website is designed with user-friendly navigation, allowing you to effortlessly browse through our diverse collections and easily filter by size, color, or style. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b> Exceptional customer service:</b>
        <p className='text-gray-600'>At Forever, we believe that our customers are at the heart of everything we do, and we are dedicated to providing an exceptional experience.</p>
        </div>
      
      </div>
      <NewsletterBox/>
     </div>
   )
 }
 
 export default About