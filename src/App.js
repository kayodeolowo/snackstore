import {Header} from "./components";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
       <main>
          <Routes> 

          </Routes>
       </main>
     
    </div>
  );
}

export default App;
