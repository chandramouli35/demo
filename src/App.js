import { Component } from "react";

class Form extends Component{
 state={value:""};

 handleChange(event){
  this.setState({value :event.target.value})
 }

 onsubmit(event){
  alert("Name Was Entered:"+this.state.value)
  event.preventDefault()
 }

 render(){
  return(
    <form onChange={this.onsubmit.bind(this)}>
      <label>
        Name:<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>

      </label>
      <input type="submit" value="submit"/>
    </form>
  );
 }
}
export default Form