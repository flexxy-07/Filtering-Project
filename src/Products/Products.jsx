import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";


import "./Products.css"
const Products = ({result}) => {
  return (
    <section className='card-container'>{result}</section>
  )
}

export default Products