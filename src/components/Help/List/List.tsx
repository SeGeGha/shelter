import React from 'react';

import helpList from '../../../config/helpList';

import './List.scss';

const List: React.FC = () => {
  const listItems = helpList.map(({ id, name, imgSrc }) => (
    <li className="list__item" key={id}>
      <img
        src={imgSrc}
        alt={name}
        className="list__item__icon"
      />
      <h4 className="list__item__text">{name}</h4>
    </li>
  ));

  return (
    <ul className="list">
      {listItems}
    </ul>
  );
};

export default List;
