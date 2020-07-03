import React from 'react'

export default function KegList(props) {
  const { kegList, buy, detail } = props
  return (
    <>
      <h1> Details</h1>
      <div className="keg-container">
        
          <div className="keg-box" key={keg.id}>
            <img src={keg.img} alt={keg.desc} />
            <div>
              <h3>{keg.name}</h3> 
              <p className="brand"><strong>Brand:</strong><br /> {keg.brand}</p>
              <h4> <strong>Pint Price:</strong> ${keg.price}</h4>
              <h5><strong>Pints Available:</strong> {keg.quantity > 0 ? keg.quantity : <strong>Out of stock</strong>}</h5>
              <h5><strong>Alcohol Contents:</strong> {keg.content}</h5>
            </div>
            <div className="buttons">
              <button className="buy" onClick={() => back(keg.id)}>Back To List</button>
            </div>
          </div>
        )
        ) 
      </div>
    </>
  )
}
