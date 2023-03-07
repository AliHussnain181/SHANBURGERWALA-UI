import { Route } from "react-router"
import { Routes,BrowserRouter } from "react-router-dom"
import About from "./component/About"
import Cart from "./component/Cart"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import Home from "./component/Home"
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import Loader from "./component/NotFound"
import PaymentSuccess from "./component/PaymentSuccess"
import Dashboard from "./component/admin/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} redirect="/me" />
        <Route path="*" element={<Loader />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
