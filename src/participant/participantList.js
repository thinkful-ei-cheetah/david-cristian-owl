import React from 'react';
import './participantList.css';
import participants from '../store';
import Participant from './participant';


const people = participants.map(
  (person, i) =>
    <Participant
      name={person.name}
      inSession={person.inSession}
      onStage={person.onStage}
      avatar={person.avatar}
      key={i}
    />
)

export default function ParticipantList(props) {
    return (
    <div className="container">
      {people}
    </div>
  );
}


