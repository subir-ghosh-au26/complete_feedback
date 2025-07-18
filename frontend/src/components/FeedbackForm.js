import React, { useState } from 'react';

function FeedbackForm({ trainee, onSubmitSuccess }) {
    const [formData, setFormData] = useState({
        courseContentRating: '',
        facultyRating: '',
        messRating: '',
        overallExperience: '',
        comments: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const submissionData = { ...formData, ...trainee };
        const apiUrl = process.env.REACT_APP_API_URL;
        await fetch(`${apiUrl}/api/submit-feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submissionData)
        });
        setIsLoading(false);
        onSubmitSuccess();
    };

    return (
        <div>
            <h2>Welcome, {trainee.name}!</h2>
            <p>Please provide your valuable feedback.</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Course Content Rating</legend>
                    <div className="rating">
                        <span>Poor</span>
                        {/* 👇 WRAP THE INPUTS IN THIS DIV 👇 */}
                        <div className="rating-inputs">
                            {[1, 2, 3, 4, 5].map(val => (
                                <input key={val} type="radio" name="courseContentRating" value={val} onChange={handleChange} required />
                            ))}
                        </div>
                        <span>Excellent</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Faculty Rating</legend>
                    <div className="rating">
                        <span>Poor</span>
                        {/* 👇 WRAP THE INPUTS IN THIS DIV 👇 */}
                        <div className="rating-inputs">
                            {[1, 2, 3, 4, 5].map(val => (
                                <input key={val} type="radio" name="facultyRating" value={val} onChange={handleChange} required />
                            ))}
                        </div>
                        <span>Excellent</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Mess/Facilities Rating</legend>
                    <div className="rating">
                        <span>Poor</span>
                        {/* 👇 WRAP THE INPUTS IN THIS DIV 👇 */}
                        <div className="rating-inputs">
                            {[1, 2, 3, 4, 5].map(val => (
                                <input key={val} type="radio" name="messRating" value={val} onChange={handleChange} required />
                            ))}
                        </div>
                        <span>Excellent</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Overall Experience</legend>
                    <div className="rating">
                        <span>Poor</span>
                        {/* 👇 WRAP THE INPUTS IN THIS DIV 👇 */}
                        <div className="rating-inputs">
                            {[1, 2, 3, 4, 5].map(val => (
                                <input key={val} type="radio" name="overallExperience" value={val} onChange={handleChange} required />
                            ))}
                        </div>
                        <span>Excellent</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Suggestions</legend>
                    <textarea name="comments" rows="4" value={formData.comments} onChange={handleChange}></textarea>
                </fieldset>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;