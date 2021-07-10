import * as actions from './../../actions';

describe('Hijinx Keg Tap-Room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Apple Cider', brand: 'Envy Apple Company', price: '7.77', alcoholContent: '9.5', description: 'Very appley', numOfPints: 11, id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Apple Cider',
      brand: 'Envy Apple Company',
      price: '7.77',
      alcoholContent: '9.5',
      description: 'Very appley',
      numOfPints: 11,
      id: 1
    });
  });

});