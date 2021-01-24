# Laravel React

First project including react and laravel

## install & Setup the environment

to run laravel we'll need to have `php` and `composer`

1. install `php`
    1. go to [php.net > downloads section](https://www.php.net/downloads)
    1. click [Windows downloads](https://windows.php.net/download#php-8.0)
       NB. make sure to download php >= 7.3.x (we recommend v8.0)
    1. download the Zip file
    1. extract this file to any path you prefer
       NB. we recommend to extract this file to `C:\Program Files\PHP`
          <p align="center">
          <img src="https://github.com/YoussefElHaddady/laravel-react/blob/main/captures/php-folder.PNG"  alt="php folder installation">
          </p>
    1. add this folder to your envirenment path variable
    1. check the installation
       in your cmd :
        ```console
        php -v
        ```
        if you got the version of php so congrats
1. install `composer`
    1. go to [composer web site](https://getcomposer.org/)
    1. click `Download`
    1. in `Windows installer` section click [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)
    1. execute the `.exe` file and follow the steps
    1. browse to your user folder and search for `AppData\Roaming\Composer\vendor\bin` copy that path and add it to your envirenment path variable
    1. check the installation
       in your cmd:
        ```console
         composer -V
        ```
        if you got the version of composer so congrats
1. install `Laravel`
    - go to laravel web site, follow the steps in the [The Laravel Installer](https://laravel.com/docs/8.x#the-laravel-installer) section
      or simply
    - run the following command in your cmd
    ```console
    composer global require laravel/installer
    ```
1. Create project
   run the following command in your cmd
    ```console
    laravel new your-app-name
    ```
1. run the project

    1. run the following command in your cmd
        ```console
        cd your-app-name
        php artisan serve
        ```
    1. in your browser go to `localhost:8000`

1. include ReactJS
    1. installing React UI scaffolding
        ```console
        composer require laravel/ui
        ```
    1. generate basic scaffolding
        ```console
        php artisan ui react
        ```
    1. ```console
       npm install
       ```
    1. ```console
       npm run watch
       ```
    1. a ReactJS component will be created under `resources/js/components/Examples.js`

## working up on the project

### React Router

remove all not necessary codes

1. change `resources/views/welcome.blade.php` file content to :

    ```html
    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <title>Laravel - React</title>
        </head>

        <body>
            <div id="root"></div>

            <script src="{{ asset('js/app.js') }}"></script>
        </body>
    </html>
    ```

1. include React Router module
    ```console
    npm install react-router-dom --save
    ```
1. create `resources/js/src/App.js` file

    ```jsx
    import React from "react";

    const App = () => {
        return (
            <div>
                <h1>This is App component</h1>
            </div>
        );
    };

    export default App;
    ```

1. edit `resources/js/app.js` file

    ```js
    require("./bootstrap");

    require("./src/App");
    ```

1. move `resources/js/components` folder to `resources/js/src` folder
    - in this structure
        <p align="center">
        <img src="https://github.com/YoussefElHaddady/laravel-react/blob/main/captures/src-folder.PNG"  alt="src folder">
        </p>
1. delete `resources/js/src/components/Example.js` file
1. create `resources/js/src/components/Home.js` file

    ```jsx
    import React from "react";

    const Home = () => {
        return (
            <div>
                <h1>This is Home component</h1>
            </div>
        );
    };

    export default Home;
    ```

1. create `resources/js/src/components/Navbar.js` file

    ```jsx
    import React from "react";
    import { Link } from "react-router-dom";

    const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    Articler
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-link">
                                Articles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };

    export default Navbar;
    ```

1. create `resources/js/src/components/About.js` file

    ```jsx
    import React from "react";

    const About = () => {
        return (
            <div>
                <h1>This is About component</h1>
            </div>
        );
    };

    export default About;
    ```

1. create `resources/js/src/components/Articles.js` file

    ```jsx
    import React from "react";
    import ArticleCard from "./ArticleCard";

    const Articles = () => {
        const articles = [
            { id: 1, title: "C Courses", content: "bla bla bla" },
            {
                id: 2,
                title: "Java Courses",
                content: "bla bla Java, bla bla Java",
            },
        ];

        return (
            <div>
                <h1>All Articles</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {articles.map((art) => (
                        <ArticleCard key={art.id} article={art} />
                    ))}
                </div>
            </div>
        );
    };

    export default Articles;
    ```

1. create `resources/js/src/components/ArticleCard.js` file

    ```jsx
    import React from "react";
    import { Link } from "react-router-dom";

    const ArticleCard = ({ article }) => {
        return (
            <div className="card mx-4 my-3" style={{ width: "18rem" }}>
                <img
                    src={`https://picsum.photos/400/200?random=${article.id}`}
                    alt={article.title}
                    className="card-img-top"
                    style={{
                        objectFit: "contain",
                    }}
                />
                <div className="card-body">
                    <h5
                        className="card-title overflow-hidden"
                        style={{
                            maxHeight: "3rem",
                            height: "3rem",
                            minHeight: "3rem",
                        }}
                    >
                        {article.title}
                    </h5>
                    <p
                        className="card-text overflow-hidden"
                        style={{
                            height: "3rem",
                            minHeight: "1rem",
                            whiteSpace: "normal",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {article.content}
                    </p>
                    <Link
                        to={`/articles/${article.title}`}
                        className="card-link"
                    >
                        Read more...
                    </Link>
                </div>
            </div>
        );
    };

    export default ArticleCard;
    ```

1. create `resources/js/src/components/ArticleDetails.js` file

    ```jsx
    import React from "react";

    const ArticleDetails = ({ match }) => {
        return <h1>{match.params.name}</h1>;
    };

    export default ArticleDetails;
    ```

1. edit `resources/js/src/App.js` file

    ```diff
    import React from "react";
    + import ReactDOM from "react-dom";
    + import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
    + import About from "./components/About";
    + import ArticleDetails from "./components/ArticleDetails";
    + import Articles from "./components/Articles";
    + import Home from "./components/Home";
    + import Navbar from "./components/Navbar";

    const App = () => {
        return (
    -        <div>
    -            <h1>This is App component</h1>
    -        </div>
    +        <Router>
    +            <div className="container">
    +                <Navbar />
    +                <div className="mx-auto p-5">
    +                    <Switch>
    +                        <Route exact path="/" component={Home} />
    +                        <Route path="/articles" exact component={Articles} />
    +                        <Route
    +                            path="/articles/:name"
    +                            component={ArticleDetails}
    +                        />
    +                        <Route path="/about" component={About} />
    +                        <Redirect to="/" />
    +                    </Switch>
    +                </div>
    +            </div>
    +        </Router>
        );
    };


    export default App;

    + if (document.getElementById("root")) {
    +     ReactDOM.render(<App />, document.getElementById("root"));
    + }
    ```

1. run the project and see your changes
    ```console
    npm run watch
    ```
