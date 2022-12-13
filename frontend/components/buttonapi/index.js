import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: "0"};
      }
    
    callapi = () => {
        fetch('http://127.0.0.1:5000')
// fill in code // this.setState({number: })

    }
    
    render() {
        const {number} = this.state
      return (
        <div>
            <button onClick={callapi}>Alert!</button>
            <h1>
                {number}
            </h1>
        </div>
      )
    }
}

export default Welcome;