import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ValidationForm from './components/ValidationForm';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  const [view, setView] = useState('validation'); // 'validation', 'feedback', 'thankyou'
  const [trainee, setTrainee] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidationSuccess = (validatedTrainee) => {
    setTrainee(validatedTrainee);
    setView('feedback');
    setErrorMessage('');
  };

  const handleSubmissionSuccess = () => {
    setView('thankyou');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Training Feedback</h1>
        {errorMessage && <div className="message error">{errorMessage}</div>}

        {view === 'validation' && (
          <ValidationForm
            onValidateSuccess={handleValidationSuccess}
            setErrorMessage={setErrorMessage}
          />
        )}

        {view === 'feedback' && (
          <FeedbackForm
            trainee={trainee}
            onSubmitSuccess={handleSubmissionSuccess}
          />
        )}

        {view === 'thankyou' && <ThankYou />}
      </div>
    </>);
}

export default App;