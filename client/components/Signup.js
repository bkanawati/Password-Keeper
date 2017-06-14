import React  from 'react';

const Signup = (props) => (
        <div id='signup-box'> 
          <div> 
            <h4 className='text'>Sign Up</h4>
          </div>
          <form  onSubmit={props.processAccountCreated}>
            <div >
                <label className='text' htmlFor='username'>Username: </label>
                <input  type='text' name='username' placeholder="ex: YouWishYouWereMe.." value={props.username} onChange={props.getAccountCreated}/>
            </div>
            <br/>
            <div >
                <label  className='text' htmlFor='password'>Password: </label>
                <input  type='text' name='password' placeholder="ex: hehehe...muaHAHA.." value={props.password} onChange={props.getAccountCreated}/>
            </div>
            <br/>
            <div >
                <button type='submit' name='submitting'>Create New Account</button>
            </div>
            <div>
                <p className='text'>Already have an account? <a className='text' href='./Login' >Log In</a></p>
            </div>
          </form>
        </div>
);

export default Signup;