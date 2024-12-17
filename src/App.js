import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Form from './components/Form';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Form/>
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
