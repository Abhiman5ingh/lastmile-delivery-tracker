import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div
        className="grow p-4"
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          background: "#f8fafc",
        }}
      >
        {children}
      </div>
    </div>
  );
}