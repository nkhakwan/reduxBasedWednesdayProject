export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: 'ADD_TICKET',
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}


export const actionFormTgl =()=> ({
  type: 'FORM_TGL'
})

export const actionAdd = (newKeg)=> {
    const { id, name, brand, img, price, content, quantity } = newKeg;
    return {
      type: 'ADD_KEG',
      id : id,
      name : name,
      brand : brand,
      img : img,
      price : price,
      content: content,
      quantity: quantity
    }
  }