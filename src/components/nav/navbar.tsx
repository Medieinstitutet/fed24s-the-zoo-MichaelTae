import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AnimalContext } from '../../contexts/animalContext';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { animal } = useContext(AnimalContext);
  const toggleTheme = () => {
    const html = document.querySelector('html');
    if (html) {
      html.classList.toggle('dark');
      localStorage.setItem(
        'theme',
        html.classList.contains('dark') ? 'dark' : 'light'
      );
    }
  };
  return (
    <nav className='theme p-4 border  h-screen flex flex-col'>
      <button
        className='bg-blue-500 text-white p-2 rounded m-2'
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <ul className='flex  flex-col justify-center items-center gap-2'>
        <li className='border w-full text-center p-2 rounded'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              ` ${isActive ? 'text-blue-500' : 'text-white'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className='border w-full text-center p-2 rounded cursor-pointer relative'
          onClick={() => setOpen((prev) => !prev)}
        >
          Animals &darr;
          {open && (
            <ul className='absolute left-0 right-0 theme z-10 mt-2 border rounded shadow'>
              {animal.length === 0 ? (
                <li className='p-2 text-gray-500'>No animals</li>
              ) : (
                animal.map((a) => (
                  <li key={a.id} className='flex theme w-full '>
                    <NavLink
                      to={`/animal/${a.id}`}
                      className={({ isActive }) =>
                        `theme border w-full p-2 ${
                          isActive ? 'text-blue-500' : 'text-black '
                        }`
                      }
                    >
                      {a.name}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
