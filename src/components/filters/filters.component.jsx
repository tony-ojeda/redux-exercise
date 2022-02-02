import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './filters.module.scss';
import { filterByPercentage, selectFilter } from "../../store/candidatesSlice";

function  Filters() {
  const [startValue, setStartValue] = useState(true);
  const dispatch = useDispatch();
  const defaultOption = useRef(null);

  function handleRadioChange(payload) {
    setStartValue(!startValue);
    dispatch(filterByPercentage(payload));
  }

  function handleSelectChange(e) {
    const value = e.target.value;
    dispatch(selectFilter(value));
      console.log('value selec', value)
  }

  return (
    <>
      <h2>Filtros</h2>
      <br />
      <hr />
      <div className='filter__container'>
        <div className='filter__element'>
          <div>
            <input
              type='radio'
              name='filter'
              id='numeric'
              checked={startValue}
              onChange={() => handleRadioChange(false)}
            />
            <label htmlFor='numeric'>Numerico</label>
          </div>
          <div>
            <input
              type='radio'
              name='filter'
              id='percentage'
              onChange={() => handleRadioChange(true)}
            />
            <label htmlFor='percentage'>Porcentaje</label>
          </div>
        </div>

        <div className='filter__element'>
          <span className='filter__title'>
            <strong>Filtrar por</strong>
          </span>
          <select name='select' onChange={handleSelectChange}>
            <option ref={defaultOption} value='all'>
              Todos
            </option>
            <option value='Candidate 1'>Candidato 1</option>
            <option value='Candidate 2'>Candidato 2</option>
            <option value='Candidate 3'>Candidato 3</option>
            <option value='Candidate 4'>Candidato 4</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Filters;
