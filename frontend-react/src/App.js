// App.js
import React from 'react';
import { Mobile, PC } from './mobilePC';  // Mobile, PC 컴포넌트를 import

function App() {
  return (
    <div className="App">
      {/* 모바일 화면에서만 보이는 콘텐츠 */}
      <Mobile>
        <h1>This is a mobile view!</h1>
      </Mobile>

      {/* PC 화면에서만 보이는 콘텐츠 */}
      <PC>
        <h1>This is a PC view!</h1>
      </PC>
    </div>
  );
}

export default App;
