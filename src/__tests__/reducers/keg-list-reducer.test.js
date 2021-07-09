import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  test('Should return a default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type:null })).toEqual({});
  });
});
