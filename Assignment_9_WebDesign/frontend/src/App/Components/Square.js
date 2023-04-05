import React from "react";

class Square extends React.Component {
  render() {
    var squareStyle = {
    
      height: 50,
      backgroundColor: this.props.color,
    };

    return (
      <div style={squareStyle}>
        Please contact us using the information below for further information. <br />
        <a href="mailto:patel.nishig@northeastern.edu">patel.nishig@northeastern.edu</a>  
        <br />
        <a href="tel:785-698-7562">785-698-7562</a>
      </div>
    );
  }
}

export default Square;
