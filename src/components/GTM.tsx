"use client"; // Add this line

import { useEffect } from 'react';

const GTM_ID = 'GTM-WZV5J89X'; // Replace with your actual GTM ID

const GTMScript = () => {
  useEffect(() => {
    // Add GTM script to the head
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    // Add GTM noscript iframe
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  }, []);

  return null;
};

export default GTMScript;
