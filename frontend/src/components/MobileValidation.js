import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';

const API_URL = 'https://complete-feedback.onrender.com/api';

const MobileValidation = () => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [exporting, setExporting] = useState(false);
    const navigate = useNavigate();
    const { isAdmin, adminKey, logout } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/trainees/validate`, { mobile });
            // On success, navigate to feedback form and pass trainee data
            navigate('/feedback', { state: { trainee: response.data.trainee } });
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async () => {
        setExporting(true);
        setError('');
        try {
            const response = await axios.get(`${API_URL}/feedback/export`, {
                responseType: 'blob',
                headers: {
                    'x-admin-key': adminKey,
                }
            });

            // Create a link to trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'feedback-export.csv');
            document.body.appendChild(link);
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (err) {
            setError('Could not export feedback. There may be no data to export.');
        } finally {
            setExporting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Trainee Feedback Portal</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="mobile">Enter Your Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        className="form-input"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g., 1234567890"
                        required
                    />
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Validating...' : 'Proceed to Feedback'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
            {isAdmin ? (
                <div className="export-container">
                    <h3>Admin Section</h3>
                    <button
                        onClick={handleExport}
                        className="btn btn-secondary"
                        disabled={exporting}
                    >
                        {exporting ? 'Exporting...' : 'Download All Feedback (CSV)'}
                    </button>
                    <button onClick={logout} className="btn" style={{ backgroundColor: '#e74c3c', marginTop: '10px' }}>
                        Logout Admin
                    </button>
                </div>
            ) : (
                <div className="export-container">
                    <Link to="/admin">Admin Login</Link>
                </div>
            )}
        </div>
    );
};

export default MobileValidation;