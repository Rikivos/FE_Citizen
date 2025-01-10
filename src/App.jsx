/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./(user)/Home";
import Sidebar from "./components/admin/Sidebar";
import Dashboard from "./(admin)/Dashboard";
import Header from "./components/admin/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin layout wrapper component
const AdminLayout = () => (
  <div className="flex">
    <Sidebar />
    <main className="p-4 w-full">
      <Header />
      <Outlet /> 
    </main>
  </div>
);

// User layout wrapper component
const UserLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet /> 
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Add more admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
