import React from 'react';
import '../components.scss'




const FavoriteCard = props => {
    console.log('props', props)
  return (
      
    <div className={'card-1'}>  
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <h4>{props.mCap}</h4>
      <h5>{props.change}</h5>
    </div>
  );
};


export default FavoriteCard;