import React, {useState} from 'react'
import axios from 'axios'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const initialX = 2
const initialY = 2

export default function AppFunctional(props) {

    const [state, setState] = useState({
      message: initialMessage,
      email: initialEmail,
      steps: initialSteps,
      index: initialIndex,
      x: initialX,
      y: initialY
    })
  
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  function getXY() {
   
    return { x: state.x, y: state.y }
    // if(state.index===0) return 'Coordinates (1, 1)'
    // if(state.index===1) return 'Coordinates (2, 1)'
    // if(state.index===2) return 'Coordinates (3, 1)'
    // if(state.index===3) return 'Coordinates (1, 2)'
    // if(state.index===5) return 'Coordinates (3, 2)'
    // if(state.index===4) return 'Coordinates (2, 2)'
    // if(state.index===6) return 'Coordinates (1, 3)'
    // if(state.index===7) return 'Coordinates (2, 3)'
    // if(state.index===8) return 'Coordinates (3, 3)'
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  function getXYMessage() {
    const location = getXY()
    console.log('help')
    return `Coordinates (${location.x}, ${location.y})`
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  function reset() {
    setState({
      message: initialMessage,
      email: initialEmail,
      steps: initialSteps,
      index: initialIndex,
      x: initialX,
      y: initialY
    })
    // Use this helper to reset all states to their initial values.
  }

  // function getNextIndex(direction) {


  //   // This helper takes a direction ("left", "up", etc) and calculates what the next index
  //   // of the "B" would be. If the move is impossible because we are at the edge of the grid,
  //   // this helper should return the current index unchanged.
  // }

      function move(evt){
        const direction = evt.target.id
        if(direction === 'up'){
          if(state.index < 3){
            setState({...state, message: "You can't go up"})
          } else {
            const idx = state.index -3
            setState({...state, message: '', index: idx, steps: state.steps+1, y: state.y-1})
          }
        }
        if(direction === 'down'){
          if(state.index === 6 || state.index >= 7){
            setState({...state, message: "You can't go down"})
          } else {
            const idx = state.index +3
            setState({...state, message: '', index: idx, steps: state.steps+1, y: state.y+1})
          }
        }
        if(direction === 'left'){
          if(state.index === 0 || state.index === 3 || state.index === 6){
            setState({...state, message: "You can't go left"})
          } else {
            const idx = state.index -1
            setState({...state, message: '', index: idx, steps: state.steps+1, x: state.x-1})
          }
        }
        if(direction === 'right'){
          if(state.index === 2 || state.index === 5 || state.index === 8){
            setState({...state, message: "You can't go right"})
          } else {
            const idx = state.index +1
            setState({...state, message: '', index: idx, steps: state.steps+1, x: state.x+1})
          }
        }
      }

   
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
 
    
  function onChange(evt) {
    setState({...state, [evt.target.name]: evt.target.value});
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    evt.preventDefault();

    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">{`You moved ${state.steps} time${state.steps !== 1 ? 's' : ''}`}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button onClick={move} id="left">LEFT</button>
        <button onClick={move} id="up">UP</button>
        <button onClick={move} id="right">RIGHT</button>
        <button onClick={move} id="down">DOWN</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" name= 'email' value={state.email} onChange = {onChange} placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
} 
