import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import ShoppingBag from './pages/ShoppingBag';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import OrderSubmission from './components/alertPages/OrderSubmission';

import Layout from './components/layout/Layout';
import ItemDetail from './components/ItemDetail.js';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/signin'>
          <SignInPage />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <PrivateRoute path='/dashboard' component={Dashboard} />

        <Route path='/gallery' exact>
          <Gallery />
        </Route>
        <Route path='/bag'>
          <ShoppingBag />
        </Route>
        <Route path='/gallery/:itemId' exact>
          <ItemDetail />
        </Route>
        <PrivateRoute path='/checkout' component={Checkout} />
        <PrivateRoute path='/ordersubmission' component={OrderSubmission} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
