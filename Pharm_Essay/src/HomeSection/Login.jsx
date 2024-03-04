import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,

    Input,
  } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
       
        <button ref={btnRef}  onClick={onOpen}>Hello, Log in</button>
        <Drawer size='md' 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
          
  
            <DrawerBody >
              <div className='bg-green-400  w-full flex justify-between align-bottom h-40 p-6'>
              <h1 className='font-bold text-2xl text-white'>Login/Sign up to continue with your order

</h1>
             <img  width="150px" src="https://assets.pharmeasy.in/web-assets/images/loginv2.svg" alt="" />
              
             
              </div>
              <br />
              <label className='font-bold text-xl' htmlFor="">Enter your mobile number</label><br /><br />
              <Input type='number' placeholder='+91 Enter your number here' />
              <button className='bg-emerald-600 pt-2 font-bold text-lg text-white pb-2 w-full rounded-lg mt-16'>send OTP</button>

              <p className='text-neutral-700 mt-36'>By continuing, you agree with our <Link className='text-black font-bold'>Privacy Policy</Link> and <Link className='text-black font-bold'>Terms and Conditions</Link></p>
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default Login;
