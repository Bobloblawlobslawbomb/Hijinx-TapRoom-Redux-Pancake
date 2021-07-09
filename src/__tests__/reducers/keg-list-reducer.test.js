import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Apple Cider',
    brand: 'Envy Apple Company',
    price: '7.77',
    alcoholContent: '9.5',
    description: 'Very appley',
    numOfPints: 10,
    id: 1
  }

  test('Should return a default state if there is no action type passed into the reducer.', () => {
    expect(kegListReducer({}, { type:null })).toEqual({});
  });

  test('Should sucessfully add new keg data to masterKegList.', () => {
    const { name, brand, price, alcoholContent, description, numOfPints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      description: description,
      numOfPints: numOfPints,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
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
  });

});
