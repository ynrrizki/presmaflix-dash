import { Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Auth from "./layouts/Auth";
import Login from "./pages/auth/Login";
import Video from "./pages/videos/Video.jsx";
import Content from "./pages/contents/Content.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Content />}></Route>
        <Route path="video" element={<Video />}></Route>
      </Route>
      <Route path="/login" element={<Auth />}>
        <Route index element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
