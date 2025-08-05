import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SidebarLayout from './components/SideBarLayout';
import Dashboard from './components/Dashboard';
import Books from './components/Books';
import Members from './components/Members';
import IssueReturn from './components/IssueReturn';
import Payments from './components/Payments';
import Login from './components/Login';
import Register from './components/Register';

function MainLayout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <SidebarLayout />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<SidebarLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<Books />} />
            <Route path="members" element={<Members />} />
            <Route path="issue-return" element={<IssueReturn />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
            <Route path='login' element={<Login />} />
            <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
