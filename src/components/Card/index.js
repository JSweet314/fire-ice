import React from 'react';

const Card = ({name, founded, seats, titles, coatOfArms, ancestralWeapons, words}) => {
  const titlePs = titles.map(title => <p key={title}>Title: {title}</p>);
  return (
    <article className='Card'>
      <h2>{name}</h2>
      <h3>{words}</h3>
      <p>Seats: {seats}</p>
      {titlePs}
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </article>
  )
};

export default Card;