import React from 'react'
import "./Colors.css"
import Input from '../../../Components/Input'
const Colors = ({handleChange}) => {
  return (
    <div className= "shiftRight">
      <h2 className='sidebar-title color-title'>Colors</h2>
      
      <label className="sidebar-label-container">
          <input onChange = {handleChange} value = "" name = "test2" type="radio" />
          <span className='checkmark all'></span>All
        </label>

        <Input 
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input 
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input 
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input 
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className='sidebar-label-container' style={{paddingTop: "13px"}}>
          <input type="radio"
          onChange={handleChange}
          value="white"
          name='test1' 
          />
          <span className='checkmark' style={{backgroundColor: "white", border: "2px solid black", marginTop: "10px", marginRight : "5px"}}>
          </span>White
        </label>
        
    </div>
  )
}

export default Colors