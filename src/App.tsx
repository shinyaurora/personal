import { useRoutes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { PointerWrapper } from './components/magicui/pointer';
import AboutMe from '@/pages/about-me';

const AppRoutes = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <AboutMe />,
    },
    {
      path: "*",
      element: <Navigate to="/" />
    }
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <PointerWrapper>
        <AppRoutes />
      </PointerWrapper>
    </Router>
  );
};

export default App;