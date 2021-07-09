import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {
      name: 'Apple Cider',
      brand: 'Envy Apple Company',
      price: '7.77',
      alcoholContent: '9.5',
      description: 'Very appley',
      numOfPints: 11,
      id: 1
    },
    2: {
      name: 'IPA',
      brand: 'Deeps Brewhaus',
      price: '10',
      alcoholContent: '11.1',
      description: 'authentic Indian pale ale',
      numOfPints: 16,
      id: 2
    }
  }

  let action;
  const kegData = {
    name: 'Apple Cider',
    brand: 'Envy Apple Company',
    price: '7.77',
    alcoholContent: '9.5',
    description: 'Very appley',
    numOfPints: 11,
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

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'IPA',
        brand: 'Deeps Brewhaus',
        price: '10',
        alcoholContent: '11.1',
        description: 'authentic Indian pale ale',
        numOfPints: 16,
        id: 2
      }
    });
  });

});
