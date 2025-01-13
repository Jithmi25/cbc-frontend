//import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
      </header>
      <main className="home-main">
        <section className="hero">
          <h2>Your Journey Starts Here</h2>
          <p>
            Discover amazing content, connect with others, and explore new
            possibilities.
          </p>
          <button className="hero-button">Get Started</button>
        </section>
      </main>

     <Link to = "/Login">Login</Link>

      <footer className="home-footer">
        <p>© 2025 Our Website. All rights reserved.</p>
      </footer>
    </div>
  )
}
