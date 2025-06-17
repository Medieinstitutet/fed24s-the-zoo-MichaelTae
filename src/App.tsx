import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './utils/router';
import { AnimalContext } from './contexts/animalContext';
import { useEffect, useReducer } from 'react';
import { AnimalReducer } from './reducers/animalReducer';
import { MediaQueryProvider } from './contexts/MediaQueryContext';
function App() {
  const [animal, dispatch] = useReducer(AnimalReducer, [], () => {
    const local = localStorage.getItem('animals');
    return local ? JSON.parse(local) : [];
  });
  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animal));
  }, [animal]);
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
      <MediaQueryProvider>
        <AnimalContext.Provider value={{ animal, dispatch }}>
          <RouterProvider router={router}></RouterProvider>
        </AnimalContext.Provider>
      </MediaQueryProvider>
    </>
  );
}

export default App;
