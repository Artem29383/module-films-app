import React from 'react';
import classes from './HomePage.module.scss';
import AddFilm from '../../components/AddFilm';
import FilmsList from '../../components/FilmsList';


const HomePage = () => {
  
  
  return (
    <div className={classes.home}>
      <AddFilm />
      <FilmsList />
    </div>
  )
};

export default HomePage;