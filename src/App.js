import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "./api/pages/index"
import Create from "./api/pages/create.jsx"
import View from "./api/pages/view.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/view/:bookId" element={<View />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
