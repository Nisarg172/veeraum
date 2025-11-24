import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Buildings from "./page/Application";
import "./App.css";
import Application from "./page/Application";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </main>
    </div>
  );
}
