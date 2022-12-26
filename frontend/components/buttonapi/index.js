import React from 'react'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {number: "1"}
        //this.setState = this.setState.bind(this)
    }
    
callapi = () => {

    fetch('http://127.0.0.1:5000')
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText)
          }
            return response
        })

        .catch(function(error) {
          alert("Fetch failed, please run the api server")
          console.log(error)
        })

  .then((response) => { // needed to use arrow syntax not .then(function(response) {
          if (response) {
            var obj;

          alert("Fetch is ok")
          console.log("Fetch completed")

        fetch('http://127.0.0.1:5000')
          .then(res => res.json())
          .then(data => {
            obj = data
          })
          .then(() => {
              console.log("below is obj from fetch, line 39 and 40 next");
              console.log(obj)
              console.log(obj.number)
              this.setState({number: obj.number}) // need to set state in local scope of function or obj will be undefined
              console.log("Call api is running when clicked line 43 is below")
              console.log(this.state)
              console.log("above is set state from obj after click, wait for rendering")
          })
        }
  })
}

    isfetchok = () => {
        fetch('http://127.0.0.1:5000')
        .then(function(response) {
          if (!response.ok) {
              throw Error(response.statusText)
          }
          return response;
        }).then(function(response) {
          alert("Fetch is ok")
          console.log("Fetched tested successfully")
        }).catch(function(error) {
          alert("Fetch failed, please run the api server")
          console.log(error)
        })
    }
    
    render() {
        const {number} = this.state
        console.log("rendering line 69 is below")
        console.log(this.state)
      return (
        <div>
            <button onClick={this.callapi}>Click to change fetch a number below!</button>
            <button onClick={this.isfetchok}>Is fetch ok?</button>
            <h1>
                {number}
            </h1>
        </div>
      )
    }
}

export default Welcome