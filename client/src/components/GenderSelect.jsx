import React from 'react'

var GenderSelect = React.createClass({
  getInitialState: function(){
    return {default: "default"}
  },

  handleOnChange: function(event){
    var selectedGender=event.target.value;
    this.setState({default: event.target.value})
    console.log('', selectedGender)
  },


  render: function(){
    return (
      <div id="select-gender">
        <select value={this.state.default} onChange={this.handleOnChange}>
        <option value="default" disable>Pick a gender</option>
        <option value="male" disable>Male</option>
        <option value="female" disable>Female</option>
        </select>
      </div>  

      )
  }

})
export default GenderSelect