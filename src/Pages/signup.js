import React from 'react';
import './signup.css';

const Signup =() =>{
  return (
     <>
     <div className='container'>
    <div className="signup">
      <h1>Sign-up as user</h1>
      <form className='form'>
          <input type="text" name='username' placeholder='Username' className='sinput'/><br />
          <input type="text" name='npassword' placeholder='New password' className='sinput'/><br />
          <input type="text" name='cpassword' placeholder='Confirm password' className='sinput'/><br />
          <button>Signup</button>
        </form>
    </div>
    <div className="signup">
      <h1>Sign-up as client</h1>
      <form className='form'>
          <input type="text" name='username' placeholder='Username' className='sinput' /><br />
          <input type="text" name='npassword' placeholder='New password' className='sinput' /><br />
          <input type="text" name='cpassword' placeholder='Confirm password' className='sinput' /><br />
          <button>Sign-up</button>
        </form>
    </div>
    
    </div>
    <div> <h3>Already have an account?  </h3><a href='/login'>Login</a></div>
    </>
  )
};

export default Signup;