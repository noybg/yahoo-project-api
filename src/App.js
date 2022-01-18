import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './screens/Login';
import MarketList from './screens/MarketList';


const App = () => {
    return (
      <div className="App">
        <Router>

          <Header/>
          
          <main>
            <Route exact path="/" component={Login} />
            <Route exact path="/market-list" component={MarketList} />
          </main>

          <Footer/>
        </Router>
      </div>
    )
}

export default App;
