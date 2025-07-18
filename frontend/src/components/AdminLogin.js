import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isLoggedIn = login(key);
        if (isLoggedIn) {
            navigate('/'); // Redirect to home page after successful login
        } else {
            setError('Invalid Admin Key. Please try again.');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="admin-key">Enter Admin Secret Key</label>
                    <input
                        type="password"
                        id="admin-key"
                        className="form-input"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default AdminLogin;