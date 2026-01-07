"use client";

import LoaderAnimation from "@/components/ui/Loader";
import { useEffect, useMemo, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
      console.log("response", data);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Expensive filter logic, not optimized, this is very simple filter var
  const filteredUser = users.filter((user) => {
    console.log("filtering users 1");
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filteredUser1 = useMemo(() => {
    console.log("filtering users 2 optimized");
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [users, search]);

  return (
    <div className="container">
      <h1 className="text-center mb-5">Users</h1>

      <input
        type="text"
        className="form-control mb-3"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button
        className="btn btn-secondary mb-3"
        onClick={() => setLoading((prev) => !prev)}
      >
        Toggle Loading
      </button>

      <div className="d-flex flex-column">
        {loading && (
          <div className="d-flex align-items-center justify-content-center">
            <LoaderAnimation />
          </div>
        )}
        <div className="row border-success border-2 border-bottom fw-bold p-3">
          <div className="col-1">S.No</div>
          <div className="col-2">Username</div>
          <div className="col-2">Name</div>
          <div className="col-3">Email</div>
          <div className="col-2">Company</div>
          <div className="col-2">Address</div>
        </div>

        {filteredUser1.map((user) => (
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
