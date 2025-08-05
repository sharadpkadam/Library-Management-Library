import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import SidebarLayout from './components/SideBarLayout';
import Dashboard from './components/Dashboard';
import Books from './components/Books';
import Members from './components/Members';
import IssueReturn from './components/IssueReturn';
import Payments from './components/Payments';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';

function MainLayout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <>
      {!hideLayout && <SidebarLayout />}
      <div style={{ marginLeft: !hideLayout ? "240px" : "0", padding: "1rem" }}>
        <Outlet />
      </div>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* All other dashboard routes inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="members" element={<Members />} />
          <Route path="issue-return" element={<IssueReturn />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
