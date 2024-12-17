import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Home/Portfolio';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Portfolio/>
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
