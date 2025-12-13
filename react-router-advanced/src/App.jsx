import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import { isLoggedIn } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLoggedIn && (
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="profile-settings" element={<ProfileSettings />} />
            </Route>
          )}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
