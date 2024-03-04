import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import '../Style/header.css'

const Footer = () => {

  let Data

  return (
    <div className='p-2 bg-gray-200' >


      <div className='w-full bg-green-300 mb-16 relative'>
        <img src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100" alt="" />
        <div className='textimage absolute top-1 text-center' ><p>Simplifying <br />
Healthcare <br />
Impacting Lives</p>
<p className='text-lg'>Download the App for Free</p></div>
      </div>

      <Grid templateColumns='repeat(4, 1fr)' gap={5}>

<div>
<Grid templateColumns='repeat(1, 1fr)' gap={2}>
<h1 className='text-xl font-bold'>Company</h1>
 <h1> About Us</h1>
<h1>Careers</h1>
<h1>Blog</h1>
<h1>Partner with PharmEasy</h1>
<h1>Sell at PharmEasy</h1>


<h2 className='font-bold text-xl'>Our Services</h2>
<Link>Order Medicine</Link>
<Link>Healthcare Products</Link>
<Link>Lab Tests</Link>
<Link>Find Nearest Collection Centre</Link>
</Grid>
</div>
 
  <Grid templateColumns='repeat(1, 1fr)' gap={2}>
  <h1 className='text-xl font-bold'>Featured Categories</h1>
 <Link> Top Products</Link>
<Link>Elderly Care</Link>
<Link>Personal Care</Link>
<Link>Healthcare Devices</Link>
<Link>Health Food and Drinks</Link>
<Link>Skin Care</Link>
<Link>Mother and Baby Care</Link>
<Link>Accessories & Wearables</Link>
<Link>Fitness Supplements</Link>
<Link>Ayurvedic Care</Link>
<Link>Sexual Wellness</Link>
<Link>Mega Clearance Sale</Link>
<Link>Diabetic Care</Link>
<Link>Health Condition</Link>
<Link>Winter Store</Link>
<Link>Trending Products</Link>
  </Grid>

 <Grid>
 <h1 className='text-xl font-bold'>Need Help</h1> 
 <Link>Browse All Medicines</Link>
<Link>Browse All Molecules</Link>
<Link>Browse All Cities</Link>
<Link>Browse All Areas</Link>
<Link>Browse All Stores</Link>
<Link>FAQs</Link>

<h1 className='text-xl font-bold'>Policy Info</h1>
<Link>Editorial Policy</Link>
<Link>Privacy Policy</Link>
<Link>Vulnerability Disclosure Policy</Link>
<Link>Terms and Conditions</Link>
<Link>Customer Support Policy</Link>
<Link>Return Policy</Link>

 </Grid>
<div> <h1 className='text-xl font-bold'>Follow us on</h1>
<div className='flex text-3xl '><Link className='mt-2 mr-2'><BsInstagram /></Link>
<Link className='m-2'><BsFacebook /></Link>
<Link className='m-2'><FaTwitter /></Link>
<Link className='m-2'><IoLogoYoutube /></Link></div>
</div>

 
  </Grid>
    </div>
  )
}

export default Footer
