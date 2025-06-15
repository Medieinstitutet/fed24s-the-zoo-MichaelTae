import { motion } from 'framer-motion';
import { useState } from 'react';
import SunSvg from '../icons/sunSvg';
import MoonSvg from '../icons/moonSvg';

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    const html = document.querySelector('html');
    if (html) {
      html.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        html.classList.contains('dark') ? 'dark' : 'light'
      );
    }
    setIsOn(!isOn);
  };

  let theme = localStorage.getItem('theme');
  return (
    <div
      className={`w-22 h-12 rounded-3xl  flex items-center cursor-pointer  p-1  ${
        isOn ? 'justify-start' : 'justify-end'
      }`}
      onClick={toggleSwitch}
      aria-label='color scheme button'
    >
      <motion.div
        className='w-8 h-8  rounded-3xl flex items-center z-10 '
        layout
        transition={{
          type: 'spring',
          visualDuration: 0.5,
          bounce: 0.2,
        }}
      >
        {theme === 'dark' ? (
          <SunSvg className='w-10 h-10' color='#00c950' />
        ) : (
          <MoonSvg className='w-10 h-10' color='black' />
        )}
      </motion.div>
      <div className='w-20 h-5 absolute  border theme opacity-40 rounded-2xl'></div>
    </div>
  );
};
