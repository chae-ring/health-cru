// App.js
import React from 'react';
import Login from './login';
//import { Mobile, PC } from './mobilePC';
// Mobile, PC 컴포넌트를 import

function App() {
  return (
    <div className="App">
      <Login />  {/* 로그인 컴포넌트를 렌더링 */}
    </div>
  );
}


export default App;
