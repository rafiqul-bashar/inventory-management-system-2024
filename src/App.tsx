import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Admin/Dashboard/home/DashboardHome";
import DashboardOverview from "./pages/Admin/Dashboard/home/DashboardOverview";
import DashboardAccouncements from "./pages/Admin/Dashboard/home/DashboardAccouncements";
import DashboardGettingStarted from "./pages/Admin/Dashboard/home/DashboardGettingStarted";
import DashboardUpdates from "./pages/Admin/Dashboard/home/DashboardUpdates";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import SalesPage from "./pages/Admin/Dashboard/sales/SalesPage";
import DocumentsPage from "./pages/Admin/Dashboard/documents/DocumentsPage";
import IntergrationsPage from "./pages/Admin/Dashboard/intergrations/IntergrationsPage";
import InventoryPage from "./pages/Admin/Dashboard/inventory/InventoryPage";
import ReportsPage from "./pages/Admin/Dashboard/reports/ReportsPage";
function App() {
  return (
    <Layout>
      {/*  React Router Setup */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* nested home routes */}
          <Route path="home/overview" element={<DashboardOverview />} />{" "}
          <Route
            path="home/announcement"
            element={<DashboardAccouncements />}
          />{" "}
          <Route
            path="home/getting-started"
            element={<DashboardGettingStarted />}
          />{" "}
          <Route path="home/recentupdate" element={<DashboardUpdates />} />{" "}
          {/* nested Sales Route */}
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="sales" element={<SalesPage />} />{" "}
          <Route path="integrations" element={<IntergrationsPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
