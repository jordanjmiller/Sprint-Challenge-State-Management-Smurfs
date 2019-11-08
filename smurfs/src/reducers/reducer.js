import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from '../actions/actions.js';

const initialState = {
    isFetching: false,
    smurfs: [],
  };


export const reducer = (state = initialState, action) => {
    console.log('Reducer initialState: ', initialState);
    console.log('reducer firing: ', action);
    switch(action.type) {
      case FETCH_SMURFS_START:{
          console.log('reducer firing FETCH_SMURFS_START');
          return{
            ...state,
            isFetching: true,
          }
      }
      case FETCH_SMURFS_SUCCESS:{
          console.log('reducer firing FETCH_SMURFS_SUCCESS');
          return{
            ...state,
            smurfs: action.payload,
            isFetching: false,
          }
      }
      case FETCH_SMURFS_FAIL:{
          console.log('reducer firing FETCH_SMURFS_FAIL');
          return{
            ...state,
            isFetching: false,
          }
      }

      default: console.log('REDUCER DEFAULT'); return state;
  }
}