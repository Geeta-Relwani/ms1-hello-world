import React , { Component } from 'react';

class SayHello extends React.Component {
    render() { 
        return (
        <div>
            This just says hello to {this.props.name}
        </div>
    )
    }
}

// export default sayHi = (name)=>{
    
// }

export default SayHello;
