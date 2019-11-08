import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const getSmurfs = () => dispatch => {
    console.log('getSmurfs firing');
    dispatch({ type: FETCH_SMURFS_START, payload: null });
        axios.get(`http://localhost:3333/smurfs`)
        .then(res =>{ console.log('axios: fetched: ', res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {dispatch({ type: FETCH_SMURFS_FAIL, payload: err }); console.log('getSmurfs CATCH ERROR: ', err) });
};

export const addSmurf = (smurf) => dispatch => {
    console.log('addSmurf firing');
    dispatch({ type: FETCH_SMURFS_START, payload: null });
        axios.post(`http://localhost:3333/smurfs/`, smurf)
         .then(res =>{ //console.log('axios: fetched: ', res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {dispatch({ type: FETCH_SMURFS_FAIL, payload: err }); console.log('addSmurf CATCH ERROR: ', err) });
};

export const removeSmurf = (victim) => dispatch => {
    console.log('deleteSmurf firing');
    dispatch({ type: FETCH_SMURFS_START, payload: null });
        axios.delete(`http://localhost:3333/smurfs/${victim}`)
         .then(res =>{ //console.log('axios: fetched: ', res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {dispatch({ type: FETCH_SMURFS_FAIL, payload: err }); console.log('addSmurf CATCH ERROR: ', err) });
};