import React from 'react'



import { Link } from "react-router-dom";
import '../Style/header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { MdAttachFile } from "react-icons/md";
import { Flex, Spacer,Box ,ButtonGroup,Heading,Button} from '@chakra-ui/react'

const MiddleHome = ({Labtest,  FeatureBrand,IntheSpotlight,SlideimageData,HealthArticles}) => {



  return (
    <div className='p-5'>
     <Link> <Box backgroundColor="rgb(154, 113, 195)">
     <Flex alignItems="center" padding="20px">
      <Box 
       width="25%" color="white">
        <h1 className='font-bold text-2xl text-white'>Become a Plus member</h1>
        <p>And enjoy extra bachat on every Order</p>
      </Box>
      <Box  width="50%" color="white" fontWeight="600">
        <h1>Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership Know more....</h1>
    <button className='bg-yellow-400 p-3 rounded-md mt-5'>Explore Now</button>
      </Box>
      <Box width="25%" color="white">
       <img src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0" alt="" />
      </Box>
  </Flex>
        
</Box></Link>
{/* .................................................... */}

 <Flex justifyContent="space-between" marginTop="50px" >
   <h1 className='font-bold text-3xl'>Frequently Booked Lab Tests</h1>
   
   <Link>View More</Link>

 </Flex>
 <div className='mt-10'>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={4} className="mySwiper">
        {Labtest.map((item,index)=>(
          index%2==0? <SwiperSlide>
          <Link>
          <div className="text-center p-2 bg-blue-50">
          <p className='text-left font-bold bg-red-600 w-20 p-1 rounded text-white'>{Math.floor(((Number(item.price_discount)-Number(item.actual_price))/ Number(item.price_discount))*100)}% OFF</p>
          
            <p className="font-bold  font-sans text-lg text-left mt-2">{item.title}</p>
            <br />
            <p className=" font-sans text-base text-left mt-2">{item.desc}</p><br />
            <p className=" font-sans text-base text-left">MRP ₹{item.price_discount}</p>
            <p className="font-bold font-sans text-base text-left">₹{item.actual_price}</p>
            </div>
          
          </Link>
          </SwiperSlide>: <SwiperSlide>
            <Link>
            <div className="text-center p-2 bg-yellow-100">
            <p className='text-left font-bold bg-red-600 w-20 p-1 rounded text-white'>{Math.floor(((Number(item.price_discount)-Number(item.actual_price))/ Number(item.price_discount))*100)}% OFF</p>  
            
              <p className="font-bold  font-sans text-lg text-left mt-2">{item.title}</p><br />
              <p className=" font-sans text-base text-left mt-2">{item.desc}</p><br />
              <p className=" font-sans text-base text-left">MRP ₹{item.price_discount}</p>
              <p className="font-bold font-sans text-base text-left">₹{item.actual_price}</p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>
     
     <h1 className='font-bold text-3xl mt-16'>Featured Brands</h1>
     <p className="mb-5 text-xl">Pick from our favourite brands</p>

     <div>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {FeatureBrand.map((item)=>(
           <SwiperSlide>
            <Link>
            <div className="text-center">
              <img className="categoryimage "  src={item.image} alt="" />
              <p className="font-bold  font-sans text-lg">{item.title}</p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>

     

     <div className='bg-amber-100 pl-4 pt-1 pr-3 pb-7'>
        
     <h1 className='font-bold text-3xl mt-16 mb-12'>In the Spotlight</h1>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {HealthArticles.map((item)=>(
           <SwiperSlide>
            <Link>
            <div className="text-center border bg-white rounded-xl">
              <img className="categoryimage "  src={item.image} alt="" />
              <p className="font-bold  font-sans text-lg">{item.title}</p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>

     <div className='mt-20'>
        
        
        <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
         slidesPerView={4} className="mySwiper">
           {SlideimageData.map((item)=>(
              <SwiperSlide>
               <Link>
               <div className="rounded-xl">
                 <img width="100%" className="categoryimage "  src={item.image} alt="" />
               
                 </div>
               
               </Link>
               </SwiperSlide>
           ))}
          
         </Swiper>
        </div>

        <div className=''>
        
        <h1 className='font-bold text-3xl mt-16 mb-4'>Health Articles</h1>
        <p className="mb-5 text-xl">Get up-to-date on our latest health updates</p>
        <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
         slidesPerView={6} className="mySwiper">
           {IntheSpotlight.map((item)=>(
              <SwiperSlide>
               <Link>
               <div className="text-center border bg-white rounded-xl">
                 <img className="categoryimage "  src={item.image} alt="" />
                 <p className="font-bold  font-sans text-lg">{item.title}</p>
                 </div>
               
               </Link>
               </SwiperSlide>
           ))}
          
         </Swiper>
        </div>

   
    </div>
  )
}

export default MiddleHome
