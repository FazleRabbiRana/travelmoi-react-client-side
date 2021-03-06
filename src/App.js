import { Route, Switch } from 'react-router-dom';
import './App.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import MyAuthProvider from './contexts/MyAuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import AdminDashBoard from './pages/Admin/AdminDashboard/AdminDashBoard';
import TermsOfServices from './pages/Shared/TermsOfServices/TermsOfServices';
import PrivacyPolicy from './pages/Shared/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <MyAuthProvider>
          <Header />
          <main>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/home'>
                <Home />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <PrivateRoute exact path='/place-order/:itemId'>
                <PlaceOrder />
              </PrivateRoute>
              <PrivateRoute exact path='/my-orders'>
                <MyOrders />
              </PrivateRoute>
              <PrivateRoute exact path='/admin-dashboard'>
                <AdminDashBoard />
              </PrivateRoute>
              <Route path='/terms-of-services'>
                <TermsOfServices />
              </Route>
              <Route path='/privacy-policy'>
                <PrivacyPolicy />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </main>
          <Footer />
        </MyAuthProvider>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
