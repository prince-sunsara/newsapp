import React, { Component } from 'react'

export class Error extends Component {
    render() {
    let errBox = {
        padding: '20px',
        fontSize: '3rem',
        width: '50%',
        margin: '3em auto'
    }
    return (
        <div style={errBox}>
        Oops! :) Page does not found!
    </div>
    )
  }
}

export default Error