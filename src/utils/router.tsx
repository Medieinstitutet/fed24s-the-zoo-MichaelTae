import { createBrowserRouter } from 'react-router';
import { Home } from '../pages/Home';
import { Layout } from '../pages/Layout';
import { AnimalDetail } from '../pages/AnimalDetail';
import { ErrorPage } from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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
