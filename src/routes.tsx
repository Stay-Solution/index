import { createBrowserRouter } from 'react-router-dom';
import { Home, Quartos } from './screens';

const router = createBrowserRouter([
  {
    path: '/index/',
    element: <Home />,
  },
  {
    path: '/quarto',
    element: <Quartos />,
  },
]);

export default router;
