import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Desc from "./Pages/Contact/Description/Desc";
import Home from "./Pages/Home/Home";
import Description from "./Pages/Home/HomeRouter/Description";
import MainLayout from "./Content/MainLayout";
import AuthLayout from "./Content/AuthLayout";
import AdminLayout from "./Content/AdminLayout";
import Protected from "./Content/Protected";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:desc" element={<Description />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:desc" element={<Desc />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<>Login page</>} />
          <Route path="/register" element={<>Register page</>} />
        </Route>
        <Route
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} />
          <Route path="/admin/dashboard" element={<>Dashboard page</>} />
          <Route path="/admin/people" element={<>people page</>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
