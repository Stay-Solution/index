import { createBrowserRouter } from 'react-router-dom';
import { Home, Quartos } from './screens';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quarto',
    element: <Quartos />,
  },
]);

export default router;
