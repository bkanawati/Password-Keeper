import React  from 'react';
import './../styles.css';

const Userpage = (props) => (
        <div>  
          <div id='user-header'>
          </div>
          <div>
              <div id='pass-creator'>
                <br/>
                <div className="Label-box">
                  <label  className="Label" htmlFor='site'>Site Name: </label><br/>
                  <input  className='Text-box' type='text' name='site' placeholder="ex: Amazon..." />
                </div>
                <br/>
                <div className="Label-box"> 
                   <label className="Label" htmlFor='username_of_user'>Username: </label><br/>
                   <input  className='Text-box' type='text' name='username_of_user' placeholder="ex: bb@bigBooty..." />
                </div>
                <br/>
                <div className="Label-box">
                   <label  className="Label" htmlFor='password_of_user'>Password: </label><br/>
                   <input className='Text-box' type='text' name='password_of_user' placeholder="ex: 0025[\/?..." />
                </div>
              </div>
              <div id='pass-boxes'>
                  <div>
                      <ul className="list"> 
                          <li><img src='http://www.descartesbiometrics.com/wp-content/uploads/2014/08/lock-icon1.png'/></li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
);

export default Userpage;