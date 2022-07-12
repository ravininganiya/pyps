const AdminDetail = ({ adminData }) => {
  return (
    <>
      <ul>
        {adminData &&
          adminData.map((item, index) => <li key={index}>{item.Name}</li>)}
      </ul>
    </>
  );
};

export default AdminDetail;
