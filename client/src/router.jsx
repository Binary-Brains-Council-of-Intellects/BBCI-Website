import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Membership from './pages/Membership';
import Constitution from './pages/Constitution';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'people', element: <People /> },
      { path: 'projects', element: <Projects /> },
      { path: 'research', element: <Research /> },
      { path: 'publications', element: <Publications /> },
      { path: 'activities', element: <Activities /> },
      { path: 'membership', element: <Membership /> },
      { path: 'constitution', element: <Constitution /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
