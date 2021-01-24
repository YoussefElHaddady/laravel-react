import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import About from "./components/About";
import ArticleDetails from "./components/ArticleDetails";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="mx-auto p-5">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/articles" exact component={Articles} />
                        <Route
                            path="/articles/:name"
                            component={ArticleDetails}
                        />
                        <Route path="/about" component={About} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
