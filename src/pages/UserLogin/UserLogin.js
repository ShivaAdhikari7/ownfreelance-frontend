import { useState } from 'react';
//import { useNavigate} from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import axios from 'axios';

const Login = () => {
  //const navigate = useNavigate();
  const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]= useState('');

    const CustomerLogin=(e)=>{
        
        e.preventDefault();
        const data={
            email: email,
            password: password  
        }
        axios.post('http://localhost:90/user/login', data)
            .then(response=>{
                setMessage(response.data.message);
                console.log(response.data.token)
                console.log(response);
                if(response.data.token){
                    //Login Access
                    localStorage.setItem('__token__', response.data.token);
                    //localStorage.setItem('userType', response.data.userType);
                  //<Redirect to="/dashboard"/>
                    setMessage(response?.data?.message)
                    window.location = "/dashboard";
 
                }
                else{
                    //error
                    setMessage("Invalid Credentials");

                }
            })
            .catch(e=>{console.log(e)})
    }

  

  return (
    <>
      <Navbar />
      <div className="container overflow-hidden section-signup ">
        <div className="row row-cols-1 row-cols-md-1 gx-5 gy-5">
          <div className="signup-form m-5 align-items-center w-50 m-auto" id='flex-login'  >
            <div>
            <h1 className='page-title m-5' id='text-login'> Login to OwnFreelance!!</h1>
            <p style={{color:'red'}} className="m-5">{message}</p>
            </div>

            <div>

            <form >
              <div className="signup-form-controls w-75 m-auto d-flex flex-column">

                <Input
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}

                />

                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e)=> setPassword(e.target.value)}
                  />

              </div>

              
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-submit "
                  type="submit"
                  label="Continue with Email"
                  onClick={CustomerLogin}

                />
              </div>
              <p className='pt-5' id='text-login' >or</p>
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-google "
                  type="submit"
                  label="Continue with Google"
                />
              </div>
              <div className="form-action text-center">
                <Button
                  className="btn-round btn-apple "
                  type="submit"
                  label="Continue with Apple"
                />
              </div>

            </form>
            </div>

            <div className="login-display text-center d-flex mt-5 justify-content-center">
              <p className="login-text">Don't Have an account?</p>
              <a href="/" className="login-link">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  };


export default Login;
