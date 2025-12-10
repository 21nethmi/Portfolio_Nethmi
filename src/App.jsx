import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="pt-20 px-4">
        <div
          id="hero"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        </div>
        <div
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">About Section</h2>
        </div>
        <div
          id="tech"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Tech Section</h2>
        </div>
        <div
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Projects Section</h2>
        </div>
        <div
          id="blogs"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Blogs Section</h2>
        </div>
        <div
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
