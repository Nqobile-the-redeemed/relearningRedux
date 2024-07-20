import React from 'react'
import { Provider } from 'react-redux';
// import Homepage from './components/Homepage';

function App() {

  return (
    <Provider store = {store}>
      <div className='App'>
        <Homepage />
    </div>
    </Provider>
  )
}

export default App
