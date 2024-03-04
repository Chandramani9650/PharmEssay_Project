
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function BasicUsage() {
  let categoriseData = ["Top Products",
"Elderly Care",
"Personal Care",
"Healthcare Devices",
"Health Food and Drinks",
"Skin Care",
"Mother and Baby Care",
"Accessories & Wearables",
"Fitness Supplements",
"Ayurvedic Care",
"Sexual Wellness",
"Mega Clearance Sale",
"Diabetic Care",
"Health Condition",
"Winter Store",

"Trending Products",]

let AllData = [
  {"Top Products":["Diabetic Care",
     " All Diabetic Care",
     " Vitamin",
    "  All Vitamin",
    "  Feet Problem",
    "  All Feet Problem",
    "  Ortho Care",
      "All Ortho Care",
     " Skin & hair Care",
    "  All Skin & hair Care",
     " Therapy Others",
     " All Therapy Others",]},
   {"Elderly Care":["Urinary Support And Care",
      "All Urinary Support And Care",
     " Adult Diapers",
    "  Underpads",
     " Urinary Control Drops",]},
     {"Personal Care":["Men Care",
     " All Men Care",
     " Sexual Wellness",
     " Health Supplements",]
    },
    {"Health Food and Drinks":[]},
   { "Skin Care":[]},
{"Mother and Baby Care":[]},
{"Accessories & Wearables":[]},
{"Fitness Supplements":[]},
{"Ayurvedic Care":[]},
{"Sexual Wellness":[]},
{"Mega Clearance Sale":[]},
{"Diabetic Care":[]},
{"Health Condition":[]},
{"Winter Store":[]},

]

function Dataflow(index){
   console.log(index);
  return(
    <>
   
   
    <div>hello</div>
    </>
  )

}


  
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      
      <button className='bg-white' onClick={onOpen}><RiArrowDropDownLine  className="drop font-extrabold text-3xl"/></button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}  size='6xl' mt={2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <div>
       <div>{AllData.map((item,index)=>(
       <div className='drpd' key={index}> <button onClick={()=>Dataflow(index)}>{Object.keys(item)}</button></div>
              
       ))}</div>
       <div>

       </div>
          
          </div>
         
          </ModalBody>
            
        </ModalContent>
      </Modal>
    </>
  )
}
export default BasicUsage;
