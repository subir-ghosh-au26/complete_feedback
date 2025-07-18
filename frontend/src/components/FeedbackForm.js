import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Navigate } from 'react-router-dom';
import StarRating from './StarRating';
import Navbar from './Navbar';

const API_URL = 'https://complete-feedback.onrender.com/api';

const FeedbackForm = () => {
    const location = useLocation();
    const trainee = location.state?.trainee;

    const [ratings, setRatings] = useState({
        courseContent: 0,
        faculty: 0,
        mess: 0,
    });
    const [suggestions, setSuggestions] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // If no trainee data is passed, redirect to the validation page
    if (!trainee) {
        return <Navigate to="/" />;
    }

    const handleRating = (category, rating) => {
        setRatings(prev => ({ ...prev, [category]: rating }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (ratings.courseContent === 0 || ratings.faculty === 0 || ratings.mess === 0) {
            setError('Please provide a rating for all categories.');
            return;
        }

        setLoading(true);
        const feedbackData = {
            traineeId: trainee.id,
            courseContentRating: ratings.courseContent,
            facultyRating: ratings.faculty,
            messRating: ratings.mess,
            suggestions,
        };

        try {
            await axios.post(`${API_URL}/feedback/submit`, feedbackData);
            setIsSubmitted(true);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while submitting.');
        } finally {
            setLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="success-message">
                <h2>Thank You, {trainee.name}!</h2>
                <p>Your feedback has been submitted successfully.</p>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <h2>Feedback for {trainee.name}</h2>
            <h3>Please rate the following on a scale of 1 to 5.</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Course Content</label>
                    <StarRating rating={ratings.courseContent} onRating={(rate) => handleRating('courseContent', rate)} />
                </div>
                <div className="form-group">
                    <label>Faculty</label>
                    <StarRating rating={ratings.faculty} onRating={(rate) => handleRating('faculty', rate)} />
                </div>
                <div className="form-group">
                    <label>Mess & Acommodation</label>
                    <StarRating rating={ratings.mess} onRating={(rate) => handleRating('mess', rate)} />
                </div>
                <div className="form-group">
                    <label htmlFor="suggestions">Suggestions/Comments (Optional)</label>
                    <textarea
                        id="suggestions"
                        className="form-textarea"
                        rows="4"
                        value={suggestions}
                        onChange={(e) => setSuggestions(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default FeedbackForm;