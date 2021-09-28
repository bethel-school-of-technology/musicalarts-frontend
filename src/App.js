import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import SellerDashboard from './pages/SellerDashboard';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/home' exact>
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
        <Route path='/seller'>
          <SellerDashboard />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
