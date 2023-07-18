
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

function App() {
   const [mode, setmode] = useState('light');
   const [alert, setalert] = useState(null)
   const showAlert = (message, type) => {
      setalert({
         message: message,
         type: type
      });
      setTimeout( ()=>{
         setalert(null);
      }, 1500);
   }
   const togglemode = () => {
      if (mode === 'dark')
      { 
         setmode('light');
         document.body.style.backgroundColor = 'white';
         showAlert(" light mode is enabled", "success")
         document.title='TextUtils-Light Mode'
         
      }
      else {
         setmode('dark');
         document.body.style.backgroundColor = 'rgb(10 36 71)';
         showAlert(" Dark  mode is enabled", "success")
         document.title = 'TextUtils-Dark Mode'

      }
   }
   return(
      
       <BrowserRouter>
         <Routes> 
            <Route
               element={
                  <div>
                     <Navbar title="Textutil" AboutText="About us" link="Home " mode={mode} togglemode={togglemode} />
                               <Alert alert={alert} />   
                     <Outlet />
                  </div>
               }
             >
         <Route exact path='/' element={<Textform it="write your favourite text here  " mode={mode} showAlert={showAlert} />}/>      
            <Route exact path='/about' element={<About />} />
         </Route>
         </Routes> 
       </BrowserRouter>
          

  )
   
  
}
//  return (
    
//     <div  className="App">
//     <Routes >
//     <Route path="/" element={<Homepage/>}   exact /> 
//     <Route path="/chats" element={<ChatPage/>} /> 
  
//       </Routes>
//       </div>
      
//  )

// const HeaderLayout = () => (
//   <>
//     <header>
//       <Navbar  title="Textutil" AboutText="About us" link="Home " />
//     </header>
//   </>
// );

// const router = createBrowserRouter([
//   {
//     element: <HeaderLayout />,
//     children: [
//       {
//         path: "/",
//         element: <div> hello </div>
//       },
//       {
//         path: '/',
//         element: <div> "hello world </div>
//       },
//       {
//         path: '/bar',
//         element: <div>foo</div>,
//        },
//       {
//         path: '/about',
//         element: <About/>
//       }
//     ],
//   },
// ]);

export default App; 

