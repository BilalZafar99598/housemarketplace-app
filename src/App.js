import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute"
import Category from "./pages/Category"
import CreateListing from "./pages/CreateListing"
import Listings from "./pages/Listings"
import Contact from './pages/Contact'
import EditListing from './pages/EditListing'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/profile" element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/category/:categoryName" element={<Category/>}/>
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/category/:categoryName/:listingId" element={<Listings/>}/>
          <Route path='/contact/:landlordId' element={<Contact />} />
          <Route path='/edit-listing/:listingId' element={<EditListing />} />
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
