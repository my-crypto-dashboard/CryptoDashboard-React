import React from 'react';
import '../components.scss'




const FavoriteCard = props => {
    console.log('props', props)
  return (
      
    <div className={'card-1'}>  
      <h4>{props.usd}</h4>
    </div>
  );
};


export default FavoriteCard;