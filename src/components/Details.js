import React from 'react'

export default function Details(props){
  const { detailItem, back} = props
  return (
    <>
      <h1> Details of {detailItem.name}</h1>
      <div className="keg-container">
        
          <div className="keg-box" key={detailItem.id}>
            <img src={detailItem.img} alt={detailItem.name} />
            <div>
              <h3>{detailItem.name}</h3> 
              <p className="brand"><strong>Brand:</strong><br /> {detailItem.brand}</p>
              <h4> <strong>Pint Price:</strong> ${detailItem.price}</h4>
              <h5><strong>Pints Available:</strong> {detailItem.quantity > 0 ? detailItem.quantity : <strong>Out of stock</strong>}</h5>
              <h5><strong>Alcohol Contents:</strong> {detailItem.content}</h5>
            </div>
            <div className="buttons">
              <button className="buy" onClick={() => back(detailItem.id)}>Back To List</button>
            </div>
          </div>
        )
        ) 
      </div>
    </>
  )
}
