import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="profile-settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
