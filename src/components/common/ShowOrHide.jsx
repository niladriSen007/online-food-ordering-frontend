const ShowOrHide = ({ when, fallback = null, child }) => {
  console.log(when)
  return when ? child : fallback
}
export default ShowOrHide




//In ts

import React from 'react';

interface ShowOrHideProps {
  when: boolean;
  fallback?: React.ReactNode;
  child: React.ReactNode;
}

const ShowOrHide: React.FC<ShowOrHideProps> = ({ when, fallback = null, child }) => {
  console.log(when);
  return when ? child : fallback;
}

export default ShowOrHide;
