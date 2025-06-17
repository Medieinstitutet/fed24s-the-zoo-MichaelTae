import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AnimalContext } from '../../contexts/animalContext';
import { Toggle } from '../toggle/toggle';
import LogoSvg from '../icons/logoSvg';

export const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animalsOpen, setAnimalsOpen] = useState(false);
  const { animal } = useContext(AnimalContext);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className='fixed top-4 left-4 z-50 p-2 rounded bg-gray-200 shadow'
        onClick={() => setSidebarOpen(true)}
        aria-label='Open menu'
      >
        <span className='block w-6 h-0.5 theme mb-1 hamburger'></span>
        <span className='block w-6 h-0.5 theme mb-1 hamburger'></span>
        <span className='block w-6 h-0.5 theme hamburger'></span>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40 backdrop-blur-sm'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white theme shadow-lg z-50 transform transition-transform duration-300 rounded-lg overflow-y-auto overflow-x-hidden  ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <span className='font-bold text-lg'></span>
          <button
            className='text-xl'
            onClick={() => setSidebarOpen(false)}
            aria-label='Close menu'
          >
            X
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <LogoSvg className='w-72 h-72 mb-2' />
          <h2 className='text-2xl font-bold mb-2'>The Zoo</h2>
          <Toggle />
        </div>
        <div className='p-4'>
          <ul className='flex flex-col gap-2 mt-4'>
            <li className='border w-full text-center rounded'>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `block w-full h-full p-2 ${
                    isActive ? 'text-blue-500' : 'theme'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                Hem
              </NavLink>
            </li>
            <li className='border w-full text-center rounded cursor-pointer relative'>
              <div
                onClick={() => setAnimalsOpen((prev) => !prev)}
                className='w-full p-2 flex justify-between items-center'
              >
                Djuren
                <span>{animalsOpen ? '▲' : '▼'}</span>
              </div>
              {animalsOpen && (
                <ul className='theme z-10 mt-2 border rounded shadow'>
                  {animal.length === 0 ? (
                    <li className='p-2 text-gray-500'>Inga djur här</li>
                  ) : (
                    animal.map((a) => (
                      <li key={a.id} className='theme w-full'>
                        <NavLink
                          to={`/animal/${a.id}`}
                          className={({ isActive }) =>
                            `theme block border w-full p-2 ${
                              isActive ? 'active' : 'theme '
                            }`
                          }
                          onClick={() => setSidebarOpen(false)}
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
        </div>
      </nav>
    </>
  );
};
