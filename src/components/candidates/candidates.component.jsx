import React from "react";
import styles from "./candidates.module.scss";
import candidate1 from "../../assets/images/candidate1.png";
import candidate2 from "../../assets/images/candidate2.png";
import candidate3 from "../../assets/images/candidate3.png";
import candidate4 from "../../assets/images/candidate4.png";
import { useDispatch } from "react-redux";
import { addTotalVotes, addVote } from "../../store/candidatesSlice";

function Candidates() {
  const dispatch = useDispatch();
  const candidates = [
    { id: 1, src: candidate1, name: "Candidate 1" },
    { id: 2, src: candidate2, name: "Candidate 2" },
    { id: 3, src: candidate3, name: "Candidate 3" },
    { id: 4, src: candidate4, name: "Candidate 4" },
  ];

  function handleClick(candidate) {
    dispatch(addTotalVotes());
    dispatch(addVote(candidate));
  }

  return (
    <div className={styles.candidates}>
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className={styles.candidate}
          onClick={() => handleClick(candidate.id)}
        >
          <img className={styles.candidate__photo} src={candidate.src} alt={ candidate.name } />
          <span className={styles.candidate__title}>{candidate.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Candidates;
