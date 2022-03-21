import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class JsonForm extends Component{
    constructor(props){
        super(props)
        this.state={input1:'homosexualitu'}
        this.handleChange=this.handleChange.bind()
    }

    handleChange(event){
        this.setState()
    }

    render(){
      return(
        <div>
      <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" name='input1' onChange={this.handleChange} value={this.state.input1} class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
</form>
  </div>
      )
    }
  }

  export default JsonForm