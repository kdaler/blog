import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./pages/About";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/PostDetail";

function App() {
    // const users = [
    //     {name: "John"},
    //     {name: "Bob"},
    // ]

  return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <>
            <div className={'content'}>
              <Route exact={true} path={"/"} component={Home} />
              <Route exact={true} path={"/about"} component={About} />
              <Route exact={true} path={"/post/:id"} component={PostDetail} />
            </div>
          </>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Home usersList={users}/>
    // </div>
  );
}

export default App;
