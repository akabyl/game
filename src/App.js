import { Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<div><h1>TUTle</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
