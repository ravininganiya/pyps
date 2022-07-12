const AdminForm = ({ handleFormSubmit, setFormData, formData }) => {
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        name="name"
        value={formData.Name}
        onChange={(e) => setFormData({ Name: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminForm;
