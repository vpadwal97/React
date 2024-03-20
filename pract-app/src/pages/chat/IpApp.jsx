import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IpApp() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    async function fetchIpAddress() {
      try {
        const response = await axios.get('https://ipinfo.io/ip');
        setIpAddress(response.data.trim());
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    }

    fetchIpAddress();
  }, []);

  return (ipAddress);
}

export default IpApp;
