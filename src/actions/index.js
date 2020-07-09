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