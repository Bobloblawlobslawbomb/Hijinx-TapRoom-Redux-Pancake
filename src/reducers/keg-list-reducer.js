export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, description, numOfPints, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          description: description,
          numOfPints: numOfPints,
          id: id    
        }
      });
      default:
        return state;
  }
};