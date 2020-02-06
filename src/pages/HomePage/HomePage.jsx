import React from 'react';
import classes from './HomePage.module.scss';
import AddFilm from './AddFilm';
import FilmsList from './FilmsList';


const HomePage = () => {
  
  
  return (
    <div className={classes.home}>
      <AddFilm />
      <FilmsList />
    </div>
  )
};

export default HomePage;