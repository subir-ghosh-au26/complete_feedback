import React, { useState } from 'react';

function ValidationForm({ onValidateSuccess, setErrorMessage }) {
    const [mobile, setMobile] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/validate-mobile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile })
        });
        const result = await response.json();

        setIsLoading(false);
        if (result.success) {
            onValidateSuccess({ name: result.name, mobile });
        } else {
            setErrorMessage(result.message);
        }
    };

    return (
        <div>
            <h2>Step 1: Validate Your Mobile Number</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mobile">Enter your 10-digit mobile number:</label>
                <input
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength="10"
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Validating...' : 'Validate'}
                </button>
            </form>
        </div>
    );
}

export default ValidationForm;