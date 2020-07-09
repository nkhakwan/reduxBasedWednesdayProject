export default (state = {}, action) => {

  const { title, body, time, upvotes, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          body: body,
          time: time,
          upvotes: upvotes,
          id: id
        }
      });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    case 'UPVOTE_POST':
      const upvotedState = { ...state };
      const upvotedPost = upvotedState[id];
      console.log(upvotedPost);
      upvotedState[id].upvotes = upvotedState[id].upvotes + 1;
      //Or
      //upvotedPost[upvotes] = parseInt(upvotedPost[upvotes]) + 1;
      return upvotedState;
    default:
      return state;
  }
}