import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './utils/router';
import { AnimalContext } from './contexts/animalContext';
import { useReducer } from 'react';
import { AnimalReducer } from './reducers/animalReducer';
function App() {
  const [animal, dispatch] = useReducer(AnimalReducer, []);
  window.onload = () => {
    localStorage.getItem('theme')
      ? document.documentElement.classList.add(localStorage.getItem('theme')!)
      : document.documentElement.classList.add('light');
    const html = document.querySelector('html');
    if (html) {
      html.classList.add('theme');
    }
  };
  return (
    <>
      <AnimalContext.Provider value={{ animal, dispatch }}>
        <RouterProvider router={router}></RouterProvider>
      </AnimalContext.Provider>
    </>
  );
}

export default App;
