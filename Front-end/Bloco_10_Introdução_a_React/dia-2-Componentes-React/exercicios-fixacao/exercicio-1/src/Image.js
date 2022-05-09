import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

// ex 1 O nome do componente declarado acima é 'Image'

export default Image;
