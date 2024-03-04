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
import { Flex, Spacer,Box ,ButtonGroup,Heading,Button,Grid} from '@chakra-ui/react'


function Categories({Data, SlideData,LabTestData,CategoryData, NewLaunch, TrandingData}){
  console.log(Data);

    return(
       
      <div className="p-7">
         <div className="Categories">
         {Data.map((item, index)=>(
         <div key={index}>
           <Link>
           <img src={item.image} alt="" /><br />
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-red-600">{item.discount}</p>
           </Link>
         </div>
         ))}
        
        </div>
        <div > 
     
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      
    
    >
    {SlideData.map((item)=>(
         <SwiperSlide>
          <Link><img className="rounded-xl" src={item.image} alt="" /></Link>
         </SwiperSlide>
         
    ))}
     
     
     
      
    </Swiper>

{/* ...................................................................... */}
        </div>

        <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-3">Lab Tests by Health Concern</h1>
        <p className="flex font-sans font-bold "><span>Powered by</span><span><img className="w-32  ml-2" src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" alt="" /></span></p>

      <div className="mt-5">

       <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {LabTestData.map((item)=>(
           <SwiperSlide><div>
            <Link><img src={item.image} alt="" /></Link>
            </div></SwiperSlide>
        ))}
       
      </Swiper>
        {/* ............................................................................ */}

        <div className="flexBox">
   <Flex  border="1px solid black" marginTop="20px"  alignItems='center'justifyContent="space-around" >
  <Box backgroundColor="#edeff2" display="flex"  width="45%" >
    <Box width="200px" padding="30px 0px 30px 20px">
      <img className="w-4/5" src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0" alt="" />
    </Box>
    <Box  textAlign="left"  padding="30px 0px 30px 0px">
      <h1 className="font-bold text-2xl mb-2">Order with Prescription</h1>
      <p >Upload prescription and we will deliver your medicines </p>
      <Link  className="flex bg-green-600 w-32 font-bold rounded-lg text-xl p-1 mt-2 text-white" to="https://pharmeasy.in/upload-prescription?src=header"><  MdAttachFile className="text-3xl" /><span>Upload</span></Link>
    </Box>
  </Box>
  <Box width="55%" marginLeft={6}  >
    <Heading size='md'>
      how it work
    </Heading>
    <Grid templateColumns='repeat(2, 1fr)' marginTop="10px" gap={4} width="100%">
      <h1><span className="bg-slate-400 text-white font-bold p-1 pl-2 pr-2 rounded-lg mr-3">1</span><span>Upload a photo of your prescription</span></h1>
      <h1><span className="bg-slate-400 text-white font-bold p-1 pl-2 pr-2 rounded-lg mr-3">2</span><span>We will call you to confirm the medicines</span></h1>
      <h1><span className="bg-slate-400 text-white font-bold p-1 pl-2 pr-2 rounded-lg mr-3">3</span><span>
Add delivery address and place the order</span></h1>
      <h1><span className="bg-slate-400 text-white font-bold p-1 pl-2 pr-2 rounded-lg mr-3">4</span><span>
Now, sit back! your medicines will get delivered at your doorstep</span></h1>
     
</Grid>


  </Box>
  </Flex>
   </div>
    </div>
    </div>

        {/* ......................................................................................... */}
     
     <Heading fontFamily="sans-serif" fontSize="30px" fontWeight="600" margin="60px 0px 20px 0px">Shop by Categories</Heading>
     <div>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {CategoryData.map((item)=>(
           <SwiperSlide>
            <Link>
            <div className="text-center">
              <img className="categoryimage "   src={item.image} alt="" />
              <p className="font-bold  font-sans text-lg">{item.title}</p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>

     <Heading fontFamily="sans-serif" fontSize="30px" fontWeight="600" margin="60px 0px 10px 0px">New Launches</Heading>
     <p className="mb-5 text-xl">New wellness range just for you!</p>
     <div>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {NewLaunch.map((item)=>(
           <SwiperSlide>
            <Link>
            <div className="text-center p-2">
              <img className="categoryimage border "  src={item.image} alt="" />
              <p className="font-bold  font-sans text-base text-left mt-2">{item.title}</p>
              <p className=" font-sans text-base text-left">MRP ₹{item.MRP}</p>
              <p className="font-bold font-sans text-base text-left">₹{item.price} <span className="text-red-500">({item.discount})</span></p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>
     <Heading fontFamily="sans-serif" fontSize="30px" fontWeight="600" margin="60px 0px 10px 0px">Trending Near You</Heading>
     <p className="mb-5 text-xl">Popular in your city</p>
      
     <div>
     <Swiper navigation={true} modules={[Navigation]}   spaceBetween={20}
      slidesPerView={6} className="mySwiper">
        {TrandingData.map((item)=>(
           <SwiperSlide>
            <Link>
            <div className="text-center p-2">
              <img className="categoryimage border "  src={item.image} alt="" />
              <p className="font-bold  font-sans text-base text-left mt-2">{item.title}</p>
              <p className=" font-sans text-base text-left">MRP ₹{item.MRP}</p>
              <p className="font-bold font-sans text-base text-left">₹{item.price} <span className="text-red-500">({item.discount})</span></p>
              </div>
            
            </Link>
            </SwiperSlide>
        ))}
       
      </Swiper>
     </div>
  
      </div>
    )
}

export default Categories