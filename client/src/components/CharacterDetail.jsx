import React from 'react';

var CharacterDetail = function(props){

 var charDetails = []
 for char props.characters.map(function(char, index){
  return (<div id="characterDetails">
    <p key={index}>{char.hair}</p>
    </div>
  );
 })

  return(
    <div id="characterBox">
      {charDetails}
    </div>
  )
}

export default CharacterDetail;