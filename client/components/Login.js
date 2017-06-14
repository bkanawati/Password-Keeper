import React  from 'react';

const Login = (props) => (
        <div id='login-box'> 
          <div> 
            <h4 className='text' >Log In</h4>
          </div>
          <form   onSubmit={props.processAccountCreated}>
            <div>
                <label className='text' htmlFor='username'>Username: </label>
                <input type='text' name='username' placeholder="ex: YouWishYouWereMe.." value={props.username} onChange={props.getAccountCreated}/>
            </div>
            <br/>
            <div>
                <label className='text' htmlFor='password'>Password: </label>
                <input type='text' name='password' placeholder="ex: hehehe...muaHAHA.." value={props.password} onChange={props.getAccountCreated}/>
            </div>
            <br/>
            <div>
                <button type='submit' name='submitting'>Log In</button>
            </div>
            <div>
                <p className='text' >Do not have an account? <a className='text' href='./Signup'>Create one</a></p> 
            </div>
          </form>
        </div>
);

export default Login;