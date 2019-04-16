import React from 'react';
import './participant.css';

export default function Participant(props) {
  if (props.inSession && !props.onStage) {
    return (
      <div className="person-container">
        <img src={props.avatar} alt='avatar' />
        <div className="person">
          <h3>{props.name}</h3>
          <p style={{color:"green"}}>in session</p>
        </div>
      </div>
    )
  }
  else if (props.inSession && props.onStage){
    return (
      <div className="person-container">
        <img src={props.avatar} alt='avatar' />
        <div className="person">
          <h3>{props.name}</h3>
          <p style={{ color: "green" }}>on stage</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="person-container">
        <img src={props.avatar} alt='avatar' />
        <div className="person">
          <h3>{props.name}</h3>
          <p style={{ color: "gray" }}>left session</p>
        </div>
      </div>
    )
  }
}
