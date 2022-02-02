import React from 'react';
import { useSelector } from 'react-redux';
import styles from './total-votes.module.scss';

function  TotalVotes() {
  const totalVotes = useSelector(state => state.candidates.totalVotes)
  return (
    <div className={ styles.votes }>
      <span className={ styles.votes__title }>Total Votos: # { totalVotes }</span>
    </div>
  )
}

export default TotalVotes;
