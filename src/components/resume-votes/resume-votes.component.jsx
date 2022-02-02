import React from 'react';
import { useSelector } from 'react-redux';
import styles from './resume-votes.module.scss'

function  ResuemVotes() {
  const candidates = useSelector(state => state.candidates.candidates)
  const isPercentage = useSelector(state => state.candidates.isPercentage)
  const selectFilter = useSelector(state => state.candidates.selectFilter)
  console.log('use sele cani', selectFilter)
  console.log('filet ils', candidates.filter(item => item.name == selectFilter));
  return (
    <div className={ styles.resume }>
      {
        selectFilter == 'all' ?
        candidates.map( candidate => ( 
          <div key={ candidate.id } className="candidate">
            Candidate #{ candidate.id }: { isPercentage ? candidate.percentage + ' % ' : candidate.votes }
          </div>
        )) :
        candidates.filter(item => item.name == selectFilter).map( candidate => ( 
          <div key={ candidate.id } className="candidate">
            Candidate #{ candidate.id }: { isPercentage ? candidate.percentage + ' % ' : candidate.votes }
          </div>
        ))
      }
    </div>
  )
}

export default ResuemVotes;
