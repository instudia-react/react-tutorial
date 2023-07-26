import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      isLoading: true
    }, () => setTimeout(() => this.setState({
        isLoading: false
    }), 1000));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isLoading ? "Loading" : this.props.name}
      </button>
    );
  }
}

export default Button;
