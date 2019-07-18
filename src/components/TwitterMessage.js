import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handelChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handelChange(event)} value={this.state.message}/>
        <div>{this.state.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
