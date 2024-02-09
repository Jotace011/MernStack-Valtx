import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import { Component } from 'react';

// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <NotesList/>,
//     //errorElement:<ErrorCustom/>
//   },
//   {
//     path: '/edit/:id',
//     element: <CreateNote/>,
//     //errorElement:<ErrorCustom/>
//   },
//   {
//     path: '/create',
//     element: <CreateNote/>,
//     //errorElement:<ErrorCustom/>
//   },
//   {
//     path: '/user',
//     element: <CreateUser/>,
//     //errorElement:<ErrorCustom/>
//   },

// ])

// class App extends Component{
//   render(){
//     return(
//       <>
//         <Navigation/>
//         <RouterProvider router={router}/>
//       </>
//     )
//   }
// }

function App() {
  return (
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' exact element={<NotesList/>} />
          <Route path='/edit/:id' element={<CreateNote/>} />
          <Route path='/create' element={<CreateNote/>} />
          <Route path='/user' element={<CreateUser/>} />
        </Routes>
      </Router>
  );
}

export default App;
