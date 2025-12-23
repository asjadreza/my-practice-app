"use client";
import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log("response", data);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("users", users);

  return (
    <div className="container">
      <h1 className="text-center mb-5">Users</h1>

      <div className="d-flex flex-column">
        <div className="row border-success border-2 border-bottom fw-bold p-3">
          <div className="col-1">S.No</div>
          <div className="col-2">Username</div>
          <div className="col-2">Name</div>
          <div className="col-3">Email</div>
          <div className="col-2">Company</div>
          <div className="col-2">Address</div>
        </div>

        {users.map((user) => (
          <div
            className="row border-dark border-1 border-bottom p-3"
            key={user.id}
          >
            <div className="col-1">{user.id}</div>
            <div className="col-2">{user.username}</div>
            <div className="col-2">{user.name}</div>
            <div className="col-3">{user.email}</div>
            <div className="col-2">{user.company.name}</div>
            <div className="col-2">{user.address.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
