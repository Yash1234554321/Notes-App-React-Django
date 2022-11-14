import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
