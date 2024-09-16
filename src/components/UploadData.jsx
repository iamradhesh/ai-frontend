import { useState } from "react";

const UploadData = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Upload Data
      </button>
    </form>
  );
};

export default UploadData;
