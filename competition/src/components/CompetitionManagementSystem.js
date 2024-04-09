import React, { useState } from 'react';
import './CompetitionManagementSystem.css';

function CompetitionManagementSystem() {
  const [competitions, setCompetitions] = useState([]);
  const [newCompetitionName, setNewCompetitionName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');

  const handleInputChange = (event) => {
    setNewCompetitionName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleParticipantInputChange = (event) => {
    setParticipantName(event.target.value);
  };

  const handleAddCompetition = () => {
    if (newCompetitionName.trim() !== '' && startDate !== '' && endDate !== '') {
      setCompetitions([
        ...competitions,
        {
          name: newCompetitionName,
          startDate,
          endDate,
          participants: [],
        },
      ]);
      setNewCompetitionName('');
      setStartDate('');
      setEndDate('');
    }
  };

  const handleAddParticipant = (index) => {
    if (participantName.trim() !== '') {
      const updatedCompetitions = [...competitions];
      updatedCompetitions[index].participants.push(participantName);
      setCompetitions(updatedCompetitions);
      setParticipantName('');
    }
  };

  const handleDeleteParticipant = (competitionIndex, participantIndex) => {
    const updatedCompetitions = [...competitions];
    updatedCompetitions[competitionIndex].participants.splice(participantIndex, 1);
    setCompetitions(updatedCompetitions);
  };

  return (
    <div className="competition-management">
      <div className="competition-form">
        <input
          type="text"
          placeholder="Enter competition name"
          value={newCompetitionName}
          onChange={handleInputChange}
          className="competition-input"
        />
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="date-input"
        />
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="date-input"
        />
        <button onClick={handleAddCompetition} className="competition-button">
          Add Competition
        </button>
      </div>
      <ul className="competition-list">
        {competitions.map((competition, index) => (
          <li key={index} className="competition-item">
            <div>
              <strong>{competition.name}</strong>
              <br />
              <small>
                Start Date: {competition.startDate} | End Date: {competition.endDate}
              </small>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter participant name"
                value={participantName}
                onChange={handleParticipantInputChange}
                className="participant-input"
              />
              <button onClick={() => handleAddParticipant(index)} className="add-participant-button">
                Add Participant
              </button>
              <ul className="participants-list">
                {competition.participants.map((participant, participantIndex) => (
                  <li key={participantIndex}>
                    {participant}
                    <button
                      onClick={() => handleDeleteParticipant(index, participantIndex)}
                      className="delete-participant-button"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionManagementSystem;
