import React from 'react';

class Welcome2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: "2"};
      }

      alert = () => {
        console.log("Line 10 click alert button")
		alert("Alert Message, going to 0")
        this.setState({number: "0"})
        console.log(this.state)
      }
  
      render() {
        const {number} = this.state
        console.log("rendering line 19 is below")
        console.log(this.state)
      return (
        <div>
            <button onClick={this.alert}>Click to alert the button to 0 below!</button>
            <h1>
                {number}
            </h1>
        </div>
      )
    }
    }

export default Welcome2;