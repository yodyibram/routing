import React, { useState, useEffect } from 'react';
import '../css/login.css'

function Login  () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Anda dapat menambahkan logika autentikasi di sini
        console.log('Username:', username);
        console.log('Password:', password);
    };
    return (
        <div className="Login">
          <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
              <h2>Login</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      );
}

export default Login;