import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PortfolioOne from './components/Home/PortfolioOne';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <PortfolioOne/>
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
