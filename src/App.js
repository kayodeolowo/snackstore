import {Header, MainContainer, Createcontainer} from "./components";
import {Route, Routes} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"

function App() {
  return (
  <AnimatePresence exitBeforeEnter  >
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>
       <main className="mt-16 md:m-24 p-8 w-full">
          <Routes> 
              <Route path="/*" element={<MainContainer/> }/>
              <Route path="/createItem" element={<Createcontainer/>} />
          </Routes>
       </main>
     
    </div>
  </AnimatePresence>
  );
}

export default App;
