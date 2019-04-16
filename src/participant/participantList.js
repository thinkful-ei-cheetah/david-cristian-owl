import React from 'react';
import './participant.css';
import ReactDom from 'react-dom';
import participant from './store';
import Participant from './participant';


const people = participants.map(
  (person, i) =>
    <Participant
      name={person.name}
      content={person.content}
      avatar={person.avatar}
      key={i}
    />
)

export default function Participant(props) {

  render() {
    return (
      <div class="container">
        
      </div>
    );
  }
}


