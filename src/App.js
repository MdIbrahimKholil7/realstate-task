import React, { Suspense } from 'react'
import './App.css';
// import Home from './components/home/Home';
import loader from './assets/images/829.gif'
const Home = React.lazy(() => import('./components/home/Home.js'));
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={<div
          className='flex justify-center items-center
          h-[100vh]
          '
        >
          <img className='w-[100px]' src={loader} alt='loader' />
        </div>}
      >
        <Home />
      </Suspense>


    </div>
  );
}

export default App;
