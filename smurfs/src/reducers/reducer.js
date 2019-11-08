import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from '../actions/actions.js';
import { START_EDITING, EDIT_SMURF_SUCCESS } from '../actions/actions.js';

const initialState = {
    isEditing: false,
    smurfToEdit: {},
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
      case START_EDITING:{
          console.log('reducer firing START_EDITING');
          return{
            ...state,
            isEditing: true,
            smurfToEdit: action.payload,
          }
      }
      case EDIT_SMURF_SUCCESS:{
          console.log('reducer firing FETCH_SMURFS_SUCCESS');
          return{
            ...state,
            smurfs: action.payload,
            isFetching: false,
            isEditing: false,
            smurfToEdit: {},
          }
      }

      default: console.log('REDUCER DEFAULT'); return state;
  }
}