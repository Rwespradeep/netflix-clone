import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import RegisterUser from "./pages/register/RegisterUser";
import Watch from "./pages/watch/Watch";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/login"
          element={!user ? <RegisterUser /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <RegisterUser /> : <Navigate to="/" />}
        />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
