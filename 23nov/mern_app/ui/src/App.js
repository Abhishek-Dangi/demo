import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Banner from './BannerComponent/Banner';
import Main from './MainComponent/Main';
import Footer from './FooterComponent/Footer';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import AddSubcategory from './AddSubcategoryComponent/AddSubcategory';
import Addproperty from './AddpropertyComponent/Addproperty';
import Userhome from './UserhomeComponent/Userhome';
import Viewproperty from './ViewpropertyComponent/Viewproperty';
import Viewsubcat from './ViewsubcatComponent/Viewsubcat';

function App() {
  return (

    <div class="wrapper" >
      {/* wrapper starts */}

      {/* Top Bar Start */}
      <Header />
      {/* Top Bar End */}

      {/* Nav Bar Start */}
      <Nav />
      {/* Nav Bar End */}

      {/* Banner Start */}
      <Banner />
      {/* Banner End */}

      {/* Content Start */}
      <Routes>
        <Route path="/" element={<Main />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/admin" element={<Adminhome />} ></Route>
        <Route path="/admin/manageusers" element={<Manageusers />} ></Route>
        <Route path="/admin/addcategory" element={<Addcategory />} ></Route>
        <Route path="/admin/addsubcategory" element={<AddSubcategory />} ></Route>
        <Route path="/admin/addproperty" element={<Addproperty />} ></Route>
        <Route path="/user" element={<Userhome />} ></Route>
        <Route path="/user/viewproperty" element={<Viewproperty />} ></Route>
        <Route path="/user/viewsubcat/:catnm" element={<Viewsubcat />} ></Route>

      </Routes>
      {/* Content End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}

      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
      {/* wrapper ends */}
    </div>

  );
}

export default App;


