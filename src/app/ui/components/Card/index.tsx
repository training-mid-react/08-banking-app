import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Body from '../Body';
import Title from '../Title';
import './style.scss';

interface CardProps {
  title: string;
  description: string;
  to: string;
}

const Card: React.FC<CardProps> = ({ title, description, to }) => {
  return (
    <Link to={to} className="card">
      <div className="card-content">
        <Title as="h3" className='card-title'>{title}</Title>
        <Body className='card-description'>{description}</Body>
      </div>
      <Link to={to} className="card-link">
      <IoIosArrowForward size={30} />
      </Link>
    </Link>
  );
};

export default Card;
