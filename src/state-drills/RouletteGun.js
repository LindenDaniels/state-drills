import React from 'react'

/*class RouletteGun extends React.Component {
    static defaultProps =  bulletInChamber: 8 };
    }
    constructor(props) {
        super(props);
        this.state = {chamber: null,
                      spinningTheChamber: false}
        
handleTriggerPull() {
    this.setState{(
        spinningTheChamber: true;
    )}
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    let interval = setInterval(() => {
    
    this.setState{(
        chamber: randomNumber;
        spinningTheChamber: false;
    )}
    }, 2000);

}

handleRenderDisplay() {
    if (spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger!...'
    } else if {
        (chamber == bulletInChamber) {
            return 'BANG!'
        } else {
            return 'Safe'
        }
    }
}
componentWillUnmount() {
    clearInterval(this.interval)
;}



render() {
    return(
        <div>
            <p>{handleRenderDisplay()}</p>
            <button onClick = {this.handleTriggerPull}>Pull the trigger!</button>
        </div>
    )
}
}*/

class RouletteGun extends React.Component {
    static defaultProps = {
      bulletInChamber: 8
    };
  
    state = {
      chamber: null,
      spinningTheChamber: false,
    };
  
    componentWillUnmount() {
      clearTimeout(this.timeout)
    }
  
    handleClick = () => {
      this.setState({
        spinningTheChamber: true,
      })
      this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() * 8)
  
        this.setState({
          chamber: randomChamber,
          spinningTheChamber: false,
        })
      }, 2000)
    }
  
    renderDisplay() {
      const { chamber, spinningTheChamber } = this.state
      const { bulletInChamber } = this.props
      if (spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...'
      } else if (chamber === bulletInChamber) {
        return 'BANG!!!!!'
      } else {
        return 'you\'re safe!'
      }
    }
  
    render() {
      return (
        <div className='RouletteGun'>
          <p>{this.renderDisplay()}</p>
          <button onClick={this.handleClick}>
            Pull the trigger!
          </button>
        </div>
      )
    }
  }
export default RouletteGun