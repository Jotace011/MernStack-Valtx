import { createContext, useState } from 'react';
import { app, messaging } from './firebase';
import { onMessage } from 'firebase/messaging';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import toast, { Toaster } from 'react-hot-toast';
import Shopping from './routes/Shopping';
import Footer from './components/Footer';
import TaskList from './routes/TaskList';

export const AppContext = createContext(null)

onMessage(messaging, payload => {
 // console.log("nueva notificacion en directo", payload)
  toast.custom(t => (
    //payload.notification.body
    <div className='bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h1 className='text-lg text-sky-700 font-semibold'>{payload.notification.title}</h1>
      <p className='text-sm text-white'>{payload.notification.body}</p>
    </div>
    ))
})

function App() {

  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider value={{route, setRoute, user, setUser}}>
      <div>
        <Toaster/>
        <Header/>
        <main className='px-6 py-20'>
          {route === "home" && <Home/>}
          {route === "login" && <Login/>}
          {route === "register" && <Register/>}
          {route === "shopping" && <Shopping/>}
          {route === "tasklist" && <TaskList/>}
          
        </main>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
