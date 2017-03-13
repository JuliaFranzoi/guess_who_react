import React from 'react'


var HairSelect = React.createClass({
  getInitialState: function(){
    return{characters: [], default:"disabled"}

  },

  createOptions: function(){
    var hairOptions= [];
    for (var index in this.props.characters){
      hairOptions.push(this.props.characters[index].hair)
      console.log(hairOptions)
    }
    console.log(hairOptions)


  var optionTags = hairOptions.map(function(hairOption, index){
    return(<option value={hairOption} key={index}>{hairOption}</option>)

})
    this.setState({optionTags});

  },

  handleSelectChange: function(event){
    var selectedHair = event.target.value;
    this.setState({default: event.target.value});
  },

  componentWillMount: function(){
    this.createOptions();
  },
  render: function(){
      return (
        <div id="selectBoxes">
          <select value={this.state.default} onChange={this.handleSelectChange}>
            <option value="disabled" disabled>Pick a Hair</option>
            {this.state.optionTags}
          </select>
        </div>
      )
    }
  })

export default HairSelect