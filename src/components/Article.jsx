import React from 'react';
function Article(props) {
    let myMap = (tab) => {
        let showTAB = [];
        props.myTestTAB.forEach((e,i) => 
            {
            showTAB = [...showTAB,<p key={i}>{e.exemple}</p>]
        })
        return showTAB
    }
    let showTAB = [];
    return (
        <div>
            {
            props.myTestTAB.forEach((e,i) => 
            {
            showTAB = [...showTAB,<p key={i}>{e.exemple}</p>]
            })}
            {showTAB}
            {myMap(props.myTestTAB)}
            <props.test/>
        </div>
    );
}

export default Article;