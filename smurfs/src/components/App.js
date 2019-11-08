import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, removeSmurf, updateSmurf, startEditing } from '../actions/actions.js'
import "./App.css";
import SmurfCard from "./SmurfCard.js";
import SmurfForm from "./SmurfForm.js";
import EditSmurf from "./EditSmurf.js";


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

const editOnSubmit = (e, smurf) => {
  e.preventDefault();
  console.log('editonsubmit smurf:', smurf);
  if (smurf && smurf.name && smurf.age && smurf.height){
      smurf = {...smurf, age: Number(smurf.age),  id: props.smurfs.length}
      console.log('editonsubmit smurf 2:', smurf);
      props.updateSmurf(smurf)
  }
  else alert('All fields must be filled out');
}

const exile = (victim) => {
  props.removeSmurf(victim);
}

const editing = (smurf) => {
  console.log(smurf);
  props.startEditing(smurf);
}

  return (
    <div className='App'>
      <h1>debug</h1>
      <SmurfForm onSubmit={onSubmit}/>
      {(()=>{
        if (props.isEditing){
          return <EditSmurf onSubmit={editOnSubmit} smurf={props.smurfToEdit} />
        }
      })()}
      {(()=>{
        if (props.isFetching){
          return <h1>Loading smurfs...</h1>
        }
        else{
          if (props.smurfs){
            return props.smurfs.map(smurf => {
              return <SmurfCard key={smurf.id} smurf={smurf} exile={exile} editing={editing}/>
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
    isEditing: state.isEditing,
    smurfToEdit: state.smurfToEdit,
    isFetching: state.isFetching,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf, removeSmurf, updateSmurf, startEditing })(App)