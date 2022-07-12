import { useEffect, useState } from "react";
import AdminDetail from "./AdminDetail";
import AdminForm from "./AdminForm";
import Manager from "./Manager";

const Admin = () => {
  const [adminData, setAdminData] = useState([]);
  const [formData, setFormData] = useState({ Name: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.Name !== " " ||
      formData.Name !== undefined ||
      formData.Name !== null
    ) {
      setAdminData([...adminData, formData]);
      setFormData({ Name: "" });
    }
  };

  useEffect(() => {
    if (adminData.length > 0) {
      localStorage.setItem("admin", JSON.stringify(adminData));
    }
  }, [adminData]);

  return (
    <>
      admin page
      <AdminForm
        handleFormSubmit={handleFormSubmit}
        setFormData={setFormData}
        formData={formData}
      />
      <AdminDetail adminData={adminData} />
      <Manager />
    </>
  );
};

export default Admin;
