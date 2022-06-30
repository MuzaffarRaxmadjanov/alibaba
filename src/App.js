import './App.css';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router ,Redirect,Route,Switch} from 'react-router-dom'
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Login from './routes/login/Login';
import Admin from "./routes/admin/Admin"
import SinglePage from './routes/singlePage/SinglePage';
import Cart from "./routes/cart/Cart"



function App() {

  const theme = useSelector( state=> state.theme )
  const user = useSelector(state => state.user)
  const singlePro = useSelector(state => state.oneProduct)
  
  return (
    <div className={theme? "App dark":"App"  }>
       <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/products/:id" component={SinglePage}/>
                <Route path="/cart" component={Cart}/>
                
                   {
                            user?
                            <>
                              <Route path="/admin" component={Admin}/>
                              <Redirect to="/admin"/>
                            </>
                            :
                            <>
                              <Route path="/login" component={Login}/>
                              <Redirect to="/login"/>
                            </>
                      }
                  
                         
            </Switch>
       </Router>
    </div>
  );
}

export default App;
