
import React from 'react'
import DisplayCharacters from './DisplayCharacters'
import Genderselect from './Genderselect'
import CharacterDetail from './CharacterDetail'
import HairSelect from './HairSelect'



var Main = React.createClass({
  getInitialState: function () {
    return {characters: [
  {name: "Freud", gender: "male", hair:"salt and pepper"},
  {name: "Marie Curie", gender: "female", hair:"black"}
], characterFocus: null}
  },
  
  render: function () {
    return (
      <div>
        <h2>Guess Who?</h2>
        <DisplayCharacters characters={this.state.characters}/>
        <Genderselect />
        <HairSelect characters={this.state.characters}/>
        <CharacterDetail characters={this.state.characters}/>
      
      </div>
    )
  }
});

 

export default Main