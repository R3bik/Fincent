import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  const { isSignedIn, user } = useUser();
  console.log(user);

  return (
    <BrowserRouter>
      <div>
        <div className="fixed w-full z-10">
          <NavBar />
        </div>
        <Routes>
          {/* Redirect root path based on user status */}
          <Route
            path="/"
            element={
              isSignedIn ? <Navigate to="/dashboard" /> : <LandingPage />
            }
          />

          {/* Dashboard - protected */}

          <Route
            path="/dashboard"
            element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
