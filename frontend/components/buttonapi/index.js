import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: "1"};

        //this.setState = this.setState.bind(this);
      }
    
    callapi = () => {
        //fetch('http://127.0.0.1:5000')
        //.then((response) => response.json())
				  //.then((data) => console.log(data))
        //console.log("Call api is running when clicked")
        
// fill in code // this.setState({number: })
      //this.state = {number: " "};
        this.setState({number: "0"})

     // const {number} = this.state
    }
    
    render() {
        const {number} = this.state
      return (
        <div>
            <button onClick={this.callapi}>Click to change the number below!</button>
            <h1>
                {number}
            </h1>
        </div>
      )
    }
}

export default Welcome;