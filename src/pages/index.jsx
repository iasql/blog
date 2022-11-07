import React from 'react';

export default function Home() {
  React.useEffect(() => {
    window.location.href = 'https://iasql.com/blog';
  }, []);
  return null;
}