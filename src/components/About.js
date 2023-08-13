import React, { Component } from 'react'

export class About extends Component {
  constructor(props){
    super(props);
    document.title = "About Us - LoveNews"
}
  render() {
    return (
      <div className='container'>About</div>
    )
  }
}

export default About