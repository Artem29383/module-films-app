import React from 'react';
import classes from './HomePage.module.scss';
import AddFilm from '../../components/AddFilm';


const HomePage = () => {
  
  
  return (
    <div className={classes.home}>
      <AddFilm />
    </div>
  )
};

export default HomePage;