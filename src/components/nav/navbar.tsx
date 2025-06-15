import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AnimalContext } from '../../contexts/animalContext';
import { Toggle } from '../toggle/toggle';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { animal } = useContext(AnimalContext);

  return (
    <nav className='theme p-4 border flex flex-col w-full h-[99%] navbar'>
      <Toggle />
      <ul className='flex  flex-col justify-center items-center gap-2'>
        <li className='border w-full text-center  rounded'>
          <div className='w-full  flex'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                ` ${isActive ? 'text-blue-500' : 'theme'} w-full  h-full p-2`
              }
            >
              Hem
            </NavLink>
          </div>
        </li>
        <li className='border w-full text-center rounded cursor-pointer relative'>
          <div onClick={() => setOpen((prev) => !prev)} className=' w-full p-2'>
            Animals &darr;
          </div>

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
