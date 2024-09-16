const ConnectionList = () => {
    const connections = [
      { name: "John Doe", status: "Connected" },
      { name: "Jane Smith", status: "Pending" },
    ];
  
    return (
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Your Connections</h2>
        <ul>
          {connections.map((conn, index) => (
            <li key={index} className="bg-gray-100 p-4 mb-2 rounded">
              <p>{conn.name}</p>
              <p>Status: {conn.status}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ConnectionList;
  