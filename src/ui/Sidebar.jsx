import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import HouseIcon from '@mui/icons-material/House';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [iconText, setIconText] = useState('');

  const changeIconText = (text='') => {
    setIconText(text);
  };

  return (
    <>
      <div className="fixed inline-flex flex-col justify-start gap-6 min-h-[100vh] bg-red-950 py-5 px-3 z-[1001]">
        <NavLink 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Home')}
          onMouseLeave={() => changeIconText('')}
          to={'/home'}
        >
            <HouseIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Home' ? iconText : ''}</span>
        </NavLink>
        <NavLink 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Post')}
          onMouseLeave={() => changeIconText('')}
          to={'/post'}
        >
            <AddToPhotosIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Post' ? iconText : ''}</span>
        </NavLink>
        <NavLink 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Profile')}
          onMouseLeave={() => changeIconText('')}
          to={'/profile'}
        >
            <Person2Icon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Profile' ? iconText : ''}</span>
        </NavLink>
        <NavLink 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Settings')}
          onMouseLeave={() => changeIconText('')}
          to={'/settings'}
        >
            <SettingsIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Settings' ? iconText : ''}</span>
        </NavLink>
        <NavLink 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Logout')}
          onMouseLeave={() => changeIconText('')}
          to={'/'}
        >
            <LogoutIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Logout' ? iconText : ''}</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
