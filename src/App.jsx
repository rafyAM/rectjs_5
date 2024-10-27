import React from 'react';
import Sider from './components/Sider'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  return(
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-row flex-grow">
        <Sider />
        <Main />
    </div>
<Footer />
</div>
)
}

export default App;
