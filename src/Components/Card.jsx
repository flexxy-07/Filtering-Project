import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";

const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <section className='card'>
            <img className= "card-img"src={img} 
            alt={title}/>
    
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
              <section className='card-reviews'>
                {star}{star}{star}{star}
                <span className='total-reviews'>{reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>{prevPrice}</del>{newPrice}
                </div>
                <div className="bag">
                  <CiBag1 className='bag-icon'/>
                </div>
              </section>
            </div>
          </section>
  )
}

export default Card