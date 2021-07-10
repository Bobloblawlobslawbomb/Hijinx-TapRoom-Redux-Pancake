import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Hijinx Keg Tap-Room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Apple Cider', brand: 'Envy Apple Company', price: '7.77', alcoholContent: '9.5', description: 'Very appley', numOfPints: 11, id: 1})).toEqual({
      type: c.ADD_KEG,
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