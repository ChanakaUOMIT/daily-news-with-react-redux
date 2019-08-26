import React from "react";
import { Route, Switch } from "react-router-dom";

//COMPONENTS
import Header from "./header";
import Footer from "./footer";

//CONTAINERS
import Home from "./../containers/home";
import News from "./../containers/News";
import GalleryItem from "./../containers/GalleryItem";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <React.Fragment>
          <Route path="/news/:id" component={News} />
          <Route path="/galleries/:id" component={GalleryItem} />
          <Route exact path="/" component={Home} />
        </React.Fragment>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
