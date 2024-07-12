import React, { useEffect } from 'react';
import 'intasend-inlinejs-sdk';
const PaymentButton = () => {
  useEffect(() => {
    const publicAPIKey = "";
                          

    if (!publicAPIKey) {
      console.error('Publishable Key is not set.');
      return;
    }

    // Initialize IntaSend
    new window.IntaSend({
      publicAPIKey: publicAPIKey,
      live: false // Set to true for live environment
    })
    .on("COMPLETE", (response) => { console.log("COMPLETE:", response); })
    .on("FAILED", (response) => { console.log("FAILED", response); })
    .on("IN-PROGRESS", () => { console.log("INPROGRESS ..."); });
  }, []);

  return (
    <div style={{ marginLeft: '17%', zoom:'80%' }}>
      <button className="intaSendPayButton" data-amount="10" data-currency="KES">Demo Subscription</button>
    </div>
  );
}

export default PaymentButton;
