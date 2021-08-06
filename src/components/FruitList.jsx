import React, { Component } from 'react'

export default class FruitList extends Component {
    render() {
        return (
            <div>
               <p>hello the fruits are</p> 
                <div>
                    {this.props.fruits.map(fruit =>
                        <p>{fruit}</p>
                    )}
                </div>
            </div>
        )
    }
}
