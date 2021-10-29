import { Route, Switch } from 'react-router-dom';
import './App.css';
import MyAuthProvider from './contexts/MyAuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
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
            <Route path='/my-orders'>
              <MyOrders />
            </Route>
            <Route path='/manage-orders'>
              <ManageOrders />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </MyAuthProvider>
    </div>
  );
}

export default App;
