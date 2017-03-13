import React from 'react';

var DisplayCharacters = function(props){

 var displayData = props.characters.map(function(char, index){
  return (<div id="characterDiv">
    <p key={index}>{char.name}</p>
    </div>
  );
 })

  return(
    <div id="characterBox">
      {displayData}
    </div>
  )
}

export default DisplayCharacters;