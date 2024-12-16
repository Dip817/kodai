import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PortfolioTwo from './components/Home/PortfolioTwo';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <PortfolioTwo/>
      </>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
