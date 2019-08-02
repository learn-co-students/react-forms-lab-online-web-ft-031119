import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 140
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} maxChars={140} />
        <small>{this.state.remainingChars}</small>
      </div>
    );
  }
}

export default TwitterMessage;
