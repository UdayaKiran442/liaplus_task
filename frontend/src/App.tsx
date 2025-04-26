import { Routes, Route } from "react-router";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
