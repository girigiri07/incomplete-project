
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { HeaderPage } from './Componets/HeaderPage';
import { ChangePasswordpage } from './pages/private/ChangePassword/ChangePasswordpage';
import { ForgotPasswordPage } from './pages/public/ForgotPassword/ForgotPasswordPage';
import { LoginPage } from './pages/public/Login/LoginPage';
import { SignUpFormPage } from './pages/public/SignUp/SignUpFormPage';
import { BrowserRouter, Routes ,Route  } from 'react-router-dom';
import { PublicRoutesList  } from './Routes/PublicRoutes';
import { PrivateRoutesList } from './Routes/PrivateRoutes';
import { TableFilter } from './table/TableFilter';
import { HomePage } from './home/HomePage';
import { Footer } from './Componets/Footer';
import { ShopPage } from './Shop/ShopPage';
import { BlogPage } from './blog/BlogPage';
import { SingleProduct } from './Shop/SingleProduct';
import { CartPage } from './Shop/CartPage';
import { SingleBlog } from './blog/SingleBlog';
import { AboutPage } from './about/AboutPage';
import { ContactPage } from './contact/ContactPage';


function App() {

  const {
CHANGEPASSWORD,
// HEADER,
HOME,
SHOP,
BLOG,
SINGLEPRODUCT,
CARTPAGE,
SINGLEBLOG,
ABOUTS,
CONTACT
   }= PrivateRoutesList

  const {
    LOGIN,
    SIGNUP,
    FORGOTPASSWORD,
    TABLETASK
  } = PublicRoutesList
  return (
<>

<BrowserRouter >
<HeaderPage />

<ToastContainer />
<Routes>
<Route path={HOME} element={<HomePage />}/>
<Route path={SHOP} element={<ShopPage />} />
<Route path={SINGLEPRODUCT} element={<SingleProduct />} />
<Route path={CARTPAGE} element={<CartPage />} />
<Route path={BLOG} element={<BlogPage />} />
<Route path={SINGLEBLOG} element={<SingleBlog />} />
<Route path={ABOUTS} element={<AboutPage />} />
<Route path={CONTACT} element={<ContactPage />} />

  <Route path={LOGIN} element={<LoginPage />} />
  <Route path={SIGNUP} element={<SignUpFormPage />} />
  {/* <Route path={HEADER} element={<HeaderPage />} /> */}
  <Route path={CHANGEPASSWORD} element={<ChangePasswordpage />} />
  <Route path={FORGOTPASSWORD} element={<ForgotPasswordPage />}/>
  

  {/* another project path */}
  <Route path={TABLETASK} element={<TableFilter />}/>
</Routes>
<Footer />
</BrowserRouter>

{/* // ethuku entha dot vachu back poitu antha mari kadayathu , direct athoda main folder la eruthu athoda file varakum
// "/pages/public/Login/LoginPage" */}
</>
  );
}
{/* <SignUpPage /> */}
export default App;
