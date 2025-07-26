import React from 'react'
import "./Sidebar.css";
import Category from './Category/Category'
import Price from './Category/Price/Price'
import Colors from './Category/Colors/Colors'

const Sidebar = ({handleChange}) => {
  return <>
  <section className='sidebar'>
    <div className='logo-container'>
      <h1>🛒</h1>
    </div>

    <Category  handleChange = {handleChange}/>
    <Price handleChange = {handleChange}/>
    <Colors handleChange = {handleChange}/>
  </section>
  </>
}

export default Sidebar