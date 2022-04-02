import React from 'react'
import {FaBookOpen} from "react-icons/fa"
import Socials from './Socials'

export default function Title() {
  return (
    <div className='titleMain'>
    <FaBookOpen className='bookicon'/>
    <div className='mainTitle'>THE BOOK SHOP</div>
    </div>
  )
}
