import React from 'react'

export default function KegList(props) {
  const { kegList, buy, detail } = props
  return (
    <>
      <h1>Drinks! Brands, Prices and Alcohol Contents </h1>
      <div className="keg-container">
        {Object.keys(kegList).length > 0 ? Object.values(kegList).map(keg => (
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
              {keg.quantity > 0 ? <button className="buy" onClick={() => buy(keg.id)}>buy</button> : <button className="buy" onClick={() => buy(keg.id)} disabled>buy</button>}
              {keg.quantity > 0 ? <button className="buy" onClick={() => detail(keg.id)}>Product Details</button> : <button className="buy" onClick={() => detail(keg.id)} disabled>detail</button>}
            </div>
          </div>
        )
        ) : <h2>No drinks Yet!</h2>}

      </div>
    </>
  )
}
//<button className="detail" onClick={() => handleDetail(keg.id)}>Detail</button>
// <button className="add" onClick={() => stock(keg.id)}>Add Stock</button>
