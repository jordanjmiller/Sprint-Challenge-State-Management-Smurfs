import React from 'react'

const SmurfCard = (props) => {
    return (
        <div>
            {(()=>{
                if (props.smurf){
                    return (
                        <div>
                            <h2>{props.smurf.name}</h2>
                            <p>id: {props.smurf.id}</p>
                            <p>age: {props.smurf.age}</p>
                            <p>height: {props.smurf.height}</p>
                            <button onClick={()=>{props.editing(props.smurf)}}>Modify</button><button onClick={()=>{props.exile(props.smurf.id)}}>Exile</button>
                        </div>
                    );
                }
            })()}
            {/* name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0 */}
        </div>
    )
}

export default SmurfCard;