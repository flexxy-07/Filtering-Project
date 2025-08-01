import React from 'react'
import "./Category.css"
import Input from '../../Components/Input'
const Category = ({handleChange}) => {
  return (
    <div className='header'>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange = {handleChange} value = "" name = "test" type="radio" />
          <span className='checkmark'></span>All
        </label>

        <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test" 
        />

        <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test" 
        />

        <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test" 
        />

        <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test" 
        />
      </div>
    </div>
  )
}

export default Category