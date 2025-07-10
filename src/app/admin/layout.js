// src/app/admin/layout.js
import Sidebar from "./sidebar";
import Header from "./header";
import "../../style/admin.css"; // hoặc css riêng nếu bạn có

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
