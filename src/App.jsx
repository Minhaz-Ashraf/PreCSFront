
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Thankyou from './components/Thankyou'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Privacy from './components/Privacy';
import Terms from './components/Terms';




function App() {


  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
      <div className=' overflow-hidden'>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/registration-successfull" element={<Thankyou />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />
</Routes>
      </div>
    </>
  )
}

export default App
