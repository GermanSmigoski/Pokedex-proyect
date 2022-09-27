import React from "react";
import { Link } from "react-router-dom";
import './loading.css'

const Loading = () =>{

    return (
        <div>
            <span className="loading">Loading...</span>
            <img className="spinner" src="https://66.media.tumblr.com/9697ebbc4887dc57620c50a12f24c61d/tumblr_nc1rokF7r31s1rd1xo1_500.gif" />
            <Link to='/'>Back to start</Link>
        </div>
    )
}

export default Loading