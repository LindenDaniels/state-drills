import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {who: 'world'}
    }
    handleButtonClickFriend = () => {
        const handleFriend = 'friend';
        this.setState({
            who: handleFriend
        })

    }
    handleButtonClickReact = () => {
        const handleReact = 'react';
        this.setState({
            who: handleReact
        })
    }
    handleButtonClickWorld = () => {
        const handleWorld = 'world';
        this.setState({
            who: handleWorld
        })
    }


render() {
    return (
        <div>
            <p>Hello, {this.state.who}!</p>
            <button onClick = {this.handleButtonClickFriend}>Friend</button>
            <button onClick = {this.handleButtonClickReact}>React</button>
            <button onClick = {this.handleButtonClickWorld}>World</button>
        </div>
    )
}
}
export default HelloWorld