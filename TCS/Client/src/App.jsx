
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import SLogin from './Pages/SLogin';
import PSignup from './Pages/PSignup';
import PHome from './Pages/PHome';
import Video from './Pages/Video';
import MyVideo from './Pages/MyVideo';


const router = createBrowserRouter([
  
 {
        path: "/",
                element: <Home />,
              },
            {
              path: "/SLogin",
              element: <SLogin />,
            },
            {
              path: "/PSignup",
              element: <PSignup />,
            },
            {
              path: "/PHome",
              element: <PHome />,
            },
            {
              path: "/Video",
              element: <Video />,
            },
            {
              path: "/MyVideo",
              element: <MyVideo />,
            },
         
           
         ]); 


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  );
}


export default App;
