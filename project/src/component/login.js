import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
import './login.css';
import DrawerAppBar from './navbar';

function Logindemo()
{
    return(
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
        <input type="text" placeholder="username" required onkeyup="validateUsername(this.value)"></input>
  
          <input type="password" name="pwd" placeholder="Enter password" required onclick="validatePassword(this.value)"></input><br></br>
          <a href='#' >Forgot Password?</a><br></br><br></br>
          {/* <Button variant="contained">LOGIN</Button> */}
          <Link to="/">
          <button>login</button>
          </Link> 
          <p class="message">Not registered? <Link to="/register">Create a new account!</Link></p>
        </form>
      </div>
      </div>
      
    
    )
}
export default Logindemo;