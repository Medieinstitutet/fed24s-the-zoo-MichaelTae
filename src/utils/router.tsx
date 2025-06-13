import { createBrowserRouter } from 'react-router';
import { Home } from '../pages/Home';
import { Layout } from '../pages/Layout';
import { AnimalDetail } from '../pages/AnimalDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error loading page</div>, //replace later with custom error comp
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/animal/:id',
        element: <AnimalDetail />,
      },
    ],
  },
]);
