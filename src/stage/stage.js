import React from 'react';
import './stage.css';
import participants from '../../store';

export default function Participant(props) {
  if(props.onStage)  
  return (
      <div class="container">
        <div class="name-container">
          <h3>{props.name}</h3>
        </div>
        <div class="avatar-container">
          <img src={props.avatar} alt="avatar"/>
        </div>
      </div>
    )
  }
