import React from 'react';
import './participant.css';
import ReactDom from 'react-dom';
import participant from './store'

export default function Participant(props) {
  if (props.inSession) {
    return (
      <div class="person-container">
        <img src={props.avatar} alt='avatar' />
        <div>
          <h3>{props.name}</h3>
          <p style={{color:"green"}}>in session</p>
        </div>
      </div>
    )
  }
  else if (props.onStage){
    return (
      <div class="person-container">
        <img src={props.avatar} alt='avatar' />
        <div>
          <h3>{props.name}</h3>
          <p style={{ color: "green" }}>on stage</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div class="person-container">
        <img src={props.avatar} alt='avatar' />
        <div>
          <h3>{props.name}</h3>
          <p style={{ color: "gray" }}>left session</p>
        </div>
      </div>
    )
  }
}
