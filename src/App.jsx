import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import { AiFillStar } from "react-icons/ai";
import Card from './Components/Card'
import "./index.css"


//Database
import products from "./db/data"

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
  const[query,setQuery] = useState("");
  // -------Input Filter-------
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 );

  // -------Radio Filter-------
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }
   // -------Radio Filter-------

  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }
  function fiteredData(products,selected,query){
    let filteredProducts = products

    //Filtering Input Items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company, newPrice,title}) => 
        category === selected || 
        color === selected ||
        company === selected || 
        newPrice === selected ||
        title === selected)
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) => (
      <Card 
      key = {Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      newPrice = {newPrice}
      prevPrice = {prevPrice}
      />
    ))

  }
  const result = fiteredData(products,selectedCategory,query);

  return (
    <div>
      <Sidebar handleChange = {handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result = {result}/>
    </div>
  )
}

export default App
