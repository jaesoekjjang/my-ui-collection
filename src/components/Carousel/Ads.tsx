import React, { memo } from 'react';

interface AdsProps {
  width: number;
  height: number;
}

const ads = ['antiquewhite', 'cadetblue', 'coral', 'blueviolet'];

const Ads: React.VFC<AdsProps> = (props) => {
  const { width: w, height: h } = props;

  const width = `${w}px`;
  const height = `${h}px`;
  return (
    <>
      {ads.map((ad) => (
        <div style={{ width, height, background: ad }}></div>
      ))}
    </>
  );
};

export default memo(Ads);
