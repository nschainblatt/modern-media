import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import HouseIcon from '@mui/icons-material/House';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

const Sidebar = () => {
  const [iconText, setIconText] = useState('');

  const changeIconText = (text='') => {
    setIconText(text);
  };

  return (
    <>
      <div className="fixed inline-flex flex-col justify-start gap-6 min-h-[100vh] bg-red-950 py-5 px-3">
        <a 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Home')}
          onMouseLeave={() => changeIconText('')}
          href={'/home'}
        >
            <HouseIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Home' ? iconText : ''}</span>
        </a>
        <a 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Post')}
          onMouseLeave={() => changeIconText('')}
          href={'/post'}
        >
            <AddToPhotosIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Post' ? iconText : ''}</span>
        </a>
        <a 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Profile')}
          onMouseLeave={() => changeIconText('')}
          href={'/profile'}
        >
            <Person2Icon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Profile' ? iconText : ''}</span>
        </a>
        <a 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Settings')}
          onMouseLeave={() => changeIconText('')}
          href={'/settings'}
        >
            <SettingsIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Settings' ? iconText : ''}</span>
        </a>
        <a 
          className="hover:cursor-pointer flex items-center"
          onMouseEnter={() => changeIconText('Logout')}
          onMouseLeave={() => changeIconText('')}
          href={'/'}
        >
            <LogoutIcon sx={{ fontSize: 40 }} />
            <span className="absolute ml-12">{iconText === 'Logout' ? iconText : ''}</span>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
