"use client";

import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="d-flex align-items-center justify-content-between border-bottom border-info p-2 shadow-lg">
      <h2>My App</h2>

      <div className="d-flex gap-3 align-items-center justify-content-center">
        <span>Home</span>
        <span>About</span>

        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid gray",
          }}
        >
          {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </button>
      </div>
    </nav>
  );
}

// "use client";

// import { useTheme } from "@/context/ThemeContext";

// export default function Navbar() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <nav className="navbar navbar-expand-lg px-4 py-3 shadow-sm"
//       style={{
//         backgroundColor: theme === "light" ? "#fff9e8" : "#111417",
//         borderBottom: theme === "light" ? "1px solid #d1c7b9" : "1px solid #33373a",
//       }}
//     >
//       <a className="navbar-brand fw-bold fs-4" href="#">
//         MyApp
//       </a>

//       <button
//         onClick={toggleTheme}
//         className="btn btn-outline-primary d-flex align-items-center gap-2"
//       >
//         <i
//           className={`bi ${
//             theme === "light" ? "bi-toggle-off" : "bi-toggle-on"
//           } fs-4`}
//         />
//         {theme === "light" ? "Dark Mode" : "Light Mode"}
//       </button>
//     </nav>
//   );
// }
