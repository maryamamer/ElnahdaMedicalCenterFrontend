import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class logout extends Component {
    render() {
        return (
            <>
                <h1>Logged Out</h1>
                <Link to='/login'>Login Again</Link>
            </>
        )
    }
}
