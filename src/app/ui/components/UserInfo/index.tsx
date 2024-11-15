import React from 'react';
import Body from '../Body';
import Title from '../Title';
import { PiUserCircleLight } from "react-icons/pi";

import './style.scss';

interface UserInfoProps {
  name?: string;
  lastname?: string;
  username?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name = 'Nalu', lastname = 'Munoz', username = 'nalumunoz' }) => {
  return (
    <div className='user-info'>
      <PiUserCircleLight size={50} />
      <div className='user-info_content'>
        <Title as="h3" color='primary'>{name} {lastname}</Title>
        <Body color='primary'>{username}</Body>
      </div>
    </div>
  );
};

export default UserInfo;
