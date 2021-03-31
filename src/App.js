import React from "react";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AddStock from "./components/AddStock";
import RemoveStock from "./components/RemoveStock";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const Home = () => {
    return (
      <div>
        <Header />
        <MainSection /> ssss
      </div>
    )
  }

  return (
    <Router>
    <div>
    <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-product" component={AddStock}/>
        <Route path="/remove-product" component={RemoveStock} />
      </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
