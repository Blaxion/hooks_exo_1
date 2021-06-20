import React from 'react';

function Personnage(props) {
    return (
        <div>
            {Object.values(props.myCardID).map((e,i) =>{
                return(
                    <p key ={i}>{Object.keys(props.myCardID)[i]}:{e}</p>
                )
            })}
            <button onClick={props.onChangeID}>RENAME</button>
        </div>
    );
}

export default Personnage;