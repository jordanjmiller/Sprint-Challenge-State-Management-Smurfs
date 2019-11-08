import React, {useState} from 'react'

export default function EditSmurf(props) {
    const [newSmurf, setNewSmurf] = useState('');

    const handleChange = e => {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        if (e.target.name === 'inputBoxName'){
            setNewSmurf({...newSmurf, name: e.target.value});
        }
        else if (e.target.name === 'inputBoxAge'){
            setNewSmurf({...newSmurf, age: e.target.value});
        }
        else if (e.target.name === 'inputBoxHeight'){
            setNewSmurf({...newSmurf, height: e.target.value});
        }
    }
    console.log(newSmurf);

    return (
      <div>
          <h3>Edit Smurf:</h3>
          <form name='inputform' onSubmit={(e)=>{props.onSubmit(e, newSmurf); }}>
          <input type='text' name='inputBoxName' onChange={handleChange} placeholder={props.smurf.name} />
          <input type='text' name='inputBoxAge' onChange={handleChange} placeholder={props.smurf.age} />
          <input type='text' name='inputBoxHeight' onChange={handleChange} placeholder={props.smurf.height} />
          <br></br>
          <input type='submit' value='Update Smurf'/>
          </form>
      </div>
    );
}
