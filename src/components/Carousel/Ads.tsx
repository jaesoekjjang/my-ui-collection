import React from 'react';

const ads = ['antiquewhite', 'cadetblue', 'coral', 'blueviolet'];

const Ads = () => {
  return (
    <>
      {ads.map((ad) => (
        <div style={{ width: '400px', height: '200px', background: ad }}></div>
      ))}
    </>
  );
};

export default Ads;
