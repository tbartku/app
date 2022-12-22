import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: "1"};
      }
    
    callapi = () => {
      
      var obj;

fetch('http://127.0.0.1:5000')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log("below is obj from fetch, line 20 and 21 next");
    console.log(obj);
    console.log(obj.number);
    this.setState({number: obj.number}) // need to set state in local scope of function or obj will be undefined
   });

        console.log("Call api is running when clicked line 26 is below")
        console.log(this.state)
        console.log("above is set state from obj after click, wait for rendering")
    }
    
    render() {
        const {number} = this.state
        console.log("rendering line 33 is below")
        console.log(this.state)
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