import React from 'react';
import PropTypes from 'prop-types';

const Card = (
  {name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers, handleOnClick}
) => {
  const titlePs = titles.map(title => <p key={title}>Title: {title}</p>);
  // const swornMembers = 
  return (
    <article 
      onClick={() => handleOnClick({swornMembers, name})}
      className='Card'>
      <h2>{name}</h2>
      <h3>{words}</h3>
      <h4>{founded}</h4>
      <p>Seats: {seats}</p>
      {titlePs}
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Coat of Arms: {coatOfArms}</p>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  words: PropTypes.string.isRequired,
  founded: PropTypes.string.isRequired,
  seats: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  coatOfArms: PropTypes.string.isRequired,
  ancestralWeapons: PropTypes.string.isRequired
};

export default Card;