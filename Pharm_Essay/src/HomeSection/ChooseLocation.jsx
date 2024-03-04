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
  import { AiFillThunderbolt } from "react-icons/ai";
  import { RiArrowDropDownLine } from "react-icons/ri";
  import '../Style/header.css'

import { Link } from 'react-router-dom'
function ChooseLocation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
       
        <button ref={btnRef}  onClick={onOpen}><Link to="">
            <p className="flex"><AiFillThunderbolt className="m-1 text-yellow-500" /> <span>Express delivery to</span></p>
            <h2 className="sel  flex"> <span className="font-bold ml-2">Select Pincode</span> <RiArrowDropDownLine  className="drop font-extrabold text-3xl"/></h2>
            </Link></button>
        <Drawer size='sm' 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
          
  
            <DrawerBody backgroundColor="rgb(195, 208, 222)" >
              <div className='w-full flex justify-between align-bottom h-40 p-6'>
              <h1 className='font-bold text-4xl text-slate-700'>Choose your Location</h1>
              </div>
            
             <div className='flex  rounded-md'>
             <input className='w-full p-3 border rounded-md' type="number" placeholder='Enter  PIN Code' /><button className='bg-teal-800 absolute right-6  rounded-lg font-bold text-white p-3 pl-8 pr-8'>Check</button>
             </div>
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
  }
export default ChooseLocation;
