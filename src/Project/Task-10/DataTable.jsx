const DataTable = ({
  searchData,
  handleEdit,
  selectedId,
  value,
  completed,
  setTitle,
  setCompleted,
  handleUpdate,
}) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Completed</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {searchData.length > 0 ? (
        searchData.map(({ id, title, completed }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>
              {selectedId === id ? (
                <input
                  value={value}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                title
              )}
            </td>
            <td>
              {selectedId === id ? (
                <select
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value === "true")}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              ) : completed ? (
                "Yes"
              ) : (
                "No"
              )}
            </td>
            <td>
              {selectedId === id ? (
                <button onClick={() => handleUpdate(id)}>Done</button>
              ) : (
                <button onClick={() => handleEdit({ id, title, completed })}>
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="notFound">
            Todos Not Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default DataTable;
