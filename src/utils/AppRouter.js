import { Routes, Route } from 'react-router-dom';
import { routes } from '../utils/routes';

export const AppRouter = () => {
  return (
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}
      </Routes>
  );
};