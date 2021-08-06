import { getAllByTitle } from '@testing-library/react';
import React, { Component } from 'react'

export default class Timer extends Component {


    state={
        date: new Date(),
    };

    updateTime(){
        setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }


    render() {
        return (
            <div>
                <h1>The time is </h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {this.updateTime()}
            </div>
        )
    }
}


