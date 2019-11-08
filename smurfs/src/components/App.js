import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, removeSmurf } from '../actions/actions.js'
import axios from 'axios';
import "./App.css";
import SmurfCard from "./SmurfCard.js";
import SmurfForm from "./SmurfForm.js";


const App = (props) => {

useEffect(() => {
  props.getSmurfs();
}, [])


const onSubmit = (e, smurf) => {
  e.preventDefault();
  console.log('onsubmit smurf:', smurf);
  if (smurf && smurf.name && smurf.age && smurf.height){
      smurf = {...smurf, age: Number(smurf.age),  id: props.smurfs.length}
      console.log('onsubmit smurf 2:', smurf);
      props.addSmurf(smurf)
  }
  else alert('All fields must be filled out');
}

const exile = (victim) => {
  props.removeSmurf(victim);
}

  return (
    <div className='App'>
      <h1>debug</h1>
      <SmurfForm onSubmit={onSubmit}/>
      {(()=>{
        if (props.isFetching){
          return <h1>Loading smurfs...</h1>
        }
        else{
          if (props.smurfs){
            return props.smurfs.map(smurf => {
              return <SmurfCard key={smurf.id} smurf={smurf} exile={exile}/>
            })
          }
        }
      })()}
    </div>
  )
} 

const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
  // let persistedState = loadState();
  // if (!persistedState){
  //   saveState(state);
  // }
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf, removeSmurf })(App)