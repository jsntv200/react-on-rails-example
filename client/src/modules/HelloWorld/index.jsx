import React, { Component, PropTypes } from 'react';
import Text from './text';

class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    this.setState({
      name: `${this.state.name} !!!!`,
    });
  }

  render() {
    return (
      <div onClick={this.changeName}>
        <p>Hello {this.state.name} from index.jsx</p>
        <Text title="Render text in text.jsx" />
      </div>
    );
  }
}

export default HelloWorld;
