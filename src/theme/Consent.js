import React, { useState } from 'react'; // new

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(window.posthog && !window.posthog.has_opted_out_capturing() && !window.posthog.has_opted_in_capturing()); // new

  if (!window.posthog || !showBanner) return <></>;
  
  const acceptCookies = () => { 
    window.posthog.opt_in_capturing();
    setShowBanner(false); // new
  };

  const declineCookies = () => {
    window.posthog.opt_out_capturing();
    setShowBanner(false); // new
  };

  return (
    <div className='banner'>
      <p className='banner-text'>
        We use tracking cookies to understand how you use the product 
        and help us improve it.
        Please accept cookies to help us improve.
      </p>
      <div className='banner-buttons'>
        <button className='banner-button clean-btn' type="button" onClick={acceptCookies}>
          Accept Cookies
        </button>
        <button className='banner-button clean-btn' type="button" onClick={declineCookies}>
          Decline Cookies
        </button>
      </div>
    </div>
  );
}