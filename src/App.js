import React, { useState, useEffect } from 'react';
import { FaTwitter, FaDiscord, FaMediumM } from 'react-icons/fa'; // Ensure react-icons is installed
import './App.css'; // Add custom CSS for background and snow effect

const GoatsOfBeraWebsite = () => {
  const [twitterUsername, setTwitterUsername] = useState('');
  const [tweetLink, setTweetLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [tweetButtonEnabled, setTweetButtonEnabled] = useState(false);
  const [linkSubmissionEnabled, setLinkSubmissionEnabled] = useState(false);
  const [walletSubmissionEnabled, setWalletSubmissionEnabled] = useState(false);
  const [message, setMessage] = useState('');

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (twitterUsername) {
      setTweetButtonEnabled(true);
      setMessage('Username submitted. You can now tweet to be allowed.');
    }
  };

  const handleTweetClick = () => {
    const tweetText = "I'm joining the herd! #BeraChain #GoatsofBera @GoatsofBera"; 
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`; // Corrected backticks
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
    setLinkSubmissionEnabled(true);
  };

  const handleLinkVerification = (e) => {
    e.preventDefault();
    if (tweetLink.includes(twitterUsername)) {
      setWalletSubmissionEnabled(true);
      setMessage('Tweet verified. You can now submit your wallet address.');
    } else {
      setMessage('Verification failed. You gotta be real to be Bera! Try again, you almost-goat.');
    }
  };

  const handleWalletSubmit = (e) => {
    e.preventDefault();
    setMessage("You're a real Goat of Bera now! Welcome to the herd.");
  };

  return (
    <div className="app-container">
      {/* Snow animation */}
      <div className="snow"></div>
      <div className="content">
        <h1 className="title">BEARLIST</h1>
        <p className="description">Join the Goats of Bera herd and become part of the BeraChain revolution!</p>
        
        <form onSubmit={handleUsernameSubmit} className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Input Twitter username"
              value={twitterUsername}
              onChange={(e) => setTwitterUsername(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>

        <button
          onClick={handleTweetClick}
          disabled={!tweetButtonEnabled}
          className={`tweet-button ${tweetButtonEnabled ? 'enabled' : 'disabled'}`}
        >
          <FaTwitter className="icon" /> Tweet to be allowed
        </button>

        <form onSubmit={handleLinkVerification} className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Paste your tweet link"
              value={tweetLink}
              onChange={(e) => setTweetLink(e.target.value)}
              disabled={!linkSubmissionEnabled}
              className="input-field"
            />
            <button type="submit" disabled={!linkSubmissionEnabled} className="submit-button">Verify</button>
          </div>
        </form>

        <form onSubmit={handleWalletSubmit} className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Submit wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              disabled={!walletSubmissionEnabled}
              className="input-field"
            />
            <button type="submit" disabled={!walletSubmissionEnabled} className="submit-button">Submit</button>
          </div>
        </form>

        {message && (
          <div className="message">
            <p>{message}</p>
          </div>
        )}

        <div className="social-icons">
          <a href="#" className="icon-link">
            <FaDiscord size={32} />
          </a>
          <a href="#" className="icon-link">
            <FaTwitter size={32} />
          </a>
          <a href="#" className="icon-link">
            <FaMediumM size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoatsOfBeraWebsite;
