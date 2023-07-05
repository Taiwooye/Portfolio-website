import Navbar  from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Certificate from './Certificate';
import Contact from './Contact';
import Skills from './Skills';


function App() {
  
  return (
    <Router> 
        <div className="App">
    <Navbar/>
    <div className="content">
    
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/aboutme">
          <Certificate/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route> 
        <Route path="/skill">
          <Skills/>
        </Route> 
     
      </Switch>   
     
    </div>
   </div>


    </Router>
 
  )
}

export default App
