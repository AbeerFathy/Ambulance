import React, { useEffect, useState } from 'react'


export default function Logout() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])
const [showForm, setShowForm] = useState(false);

    // Function to toggle form visibility
    const toggleForm = () => {
      setShowForm(!showForm); // Toggle the boolean state
    };
  
  return (
 
<>
   
      <div className="container text-center mt-5">
        {/* Button to toggle form visibility */}
        <button
          className="btn btn-primary"
          onClick={toggleForm}
        >
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
  
        {/* Conditional rendering of the form based on state */}
        {showForm && (
          <div className="mt-4">
            <h3>Sign Up Form</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        )}
      </div>
      </>
  )
}
