import React from 'react';
import MenuIconesLoggedIn from './MenuIconesLoggedIn';
import MenuIconesLoggedOut from './MenuIconesLoggedOut';
import { useIsAuth } from '../../../hooks';

const MenuIcones: React.FC = () => {
  const isAuth = useIsAuth();

  return (
    <>
      {isAuth ? <MenuIconesLoggedIn /> : <MenuIconesLoggedOut />}
    </>
  );
};

export default MenuIcones;
