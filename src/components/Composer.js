import React, { Component } from "react";

class Composer extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: ""
    };
  }

  onKeyUp = (evt) => {
    this.setState({
      text: evt.target.value 
    })
  }

  render() {
    const { onSubmit } = this.props;
    const { text } = this.state;

    return (
      <div className="composer">
        <div><textarea onKeyUp={this.onKeyUp}></textarea></div>
        <button onClick={() => onSubmit(text)}>Send</button> 
      </div>
    )
  }
}

/*const Composer = () =>(
    <div className="composer">
        <div><textarea></textarea></div>
        <button>Send</button>
      </div>
);*/

export default Composer;