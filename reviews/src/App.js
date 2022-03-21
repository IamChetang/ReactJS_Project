import React from 'react';
import Review from './components/Review';

function App() {
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <h2>Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
