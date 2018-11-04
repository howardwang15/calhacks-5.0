import React from 'react'

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" }
  }

  render() {
    return (
      <div>
        <button style={buttonStyle}>
          {this.props.title}
        </button>
      </div>
    )
  }
}

const buttonStyle = {
  color: "white",
  backgroundColor: "#6A98FF",
  fontSize: "18px",
  lineHeight: "18px",
  padding: "12px",
  borderRadius: "10px",
  margins: "20px"
//  fontFamily: "Helvetica sans-serif",
  //font-weight: "normal"
}
