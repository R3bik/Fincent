import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./routes/ProtectedRoutes";
import MainDashboard from "./components/Dashboard/MainDashboard";
import Income from "./components/Dashboard/Income";
import Expenses from "./components/Dashboard/Expenses";
import Prediction from "./components/Dashboard/Prediction";
import Profile from "./components/Dashboard/Profile";

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

          {/* Protected dashboard layout */}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route element={<Dashboard />}>
              <Route index element={<MainDashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="prediction" element={<Prediction />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
