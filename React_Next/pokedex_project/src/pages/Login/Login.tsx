import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (email && password) {
      console.log('Enviando dados para API:', { email, password });
    }
  };

  return (
    <>
        <Header/>
        <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            
            <button type="submit">Entrar</button>

            {/* Agrupando o texto de auxílio de forma semântica */}
            <p className="register-link">
            Don't have an account? 
                <Link to="/register">Register here</Link>
            </p>
        </form>
        </div>
    </>
  );
}