import {useState, useEffect} from "react";
import {
  Switch, 
  Route, 
  NavLink, 
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BlogPage from "./pages/BlogPage";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="hamburger-menu" onClick={() => setShowNav(!showNav)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav 
          className={`navbar ${showNav && "navbar-active"}`}
          onClick={() => setShowNav(false)}
        >
          <NavLink exact to="/" activeClassName="navlink-active">HOME</NavLink>
          <NavLink to="/projects" activeClassName="navlink-active">PROJECTS</NavLink>
          <NavLink to="/blog" activeClassName="navlink-active">Blog</NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
