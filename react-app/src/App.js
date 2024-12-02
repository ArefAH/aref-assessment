import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import { ProjectsProvider } from './context/projectsContext'

function App() {
  return (
    <div className="App">
      <ProjectsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ProjectsProvider>
    </div>
  );
}

export default App;
