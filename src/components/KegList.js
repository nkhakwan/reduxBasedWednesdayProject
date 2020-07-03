import React from 'react'

export default function KegList(props) {
  const { kegList, buy, stock } = props
  return (
    <>
      <h1>Kegs! </h1>
      <div className="keg-container">
        {kegList.length > 0 ? kegList.map(keg => (
          <div className="keg-box" key={keg.id}>
            <img src={keg.img} alt={keg.desc} />
            <div>
              <h3>{keg.name}</h3> 
              <p className="desc"><strong>Description:</strong><br /> {keg.desc}</p>
              <h4> <strong>Cost of Pint:</strong> ${keg.price}</h4>
              <h5><strong>Stock:</strong> {keg.quantity > 0 ? keg.quantity : <strong>Out of stock</strong>}</h5>
            </div>
            <div className="buttons">
              {keg.quantity > 0 ? <button className="buy" onClick={() => buy(keg.id)}>buy</button> : <button className="buy" onClick={() => buy(keg.id)} disabled>buy</button>}
              
              
              
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
