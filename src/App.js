import Header from './containers/Header';
import './App.css';
import ProductDetails from './containers/ProductDetails';
import ProductList from './containers/ProductList';
import ProductComponent from './containers/ProductComponent';
import {BrowseRouter as Router, Switch, Route} from "react-router-dom"; 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route> 404 Not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
