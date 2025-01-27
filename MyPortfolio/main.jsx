import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Developer Name</h1>
          <nav className="flex gap-4">
            {[
              { title: "About Me", path: "about" },
              { title: "Portfolio", path: "portfolio" },
              { title: "Contact", path: "contact" },
              { title: "Resume", path: "resume" },
            ].map(({ title, path }) => (
              <Link
                key={path}
                to={`/${path}`}
                className={`hover:underline ${
                  activeSection === path ? "font-bold underline" : ""
                }`}
                onClick={() => handleNavClick(path)}
              >
                {title}
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/about"
              element={
                <section>
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <div className="flex gap-4">
                    <img
                      src="/path-to-your-photo.jpg"
                      alt="Developer"
                      className="w-32 h-32 rounded-full"
                    />
                    <p>
                      Hi! I'm a passionate web developer with experience in React, building dynamic
                      and responsive applications.
                    </p>
                  </div>
                </section>
              }
            />
            <Route
              path="/portfolio"
              element={
                <section>
                  <h2 className="text-xl font-bold mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array(6)
                      .fill(null)
                      .map((_, i) => (
                        <Card key={i}>
                          <CardContent>
                            <h3 className="font-bold">Project {i + 1}</h3>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Deployed App
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline ml-2"
                            >
                              GitHub Repo
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section>
                  <h2 className="text-xl font-bold mb-4">Contact</h2>
                  <form className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border rounded p-2"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border rounded p-2"
                      required
                    />
                    <textarea
                      placeholder="Message"
                      className="border rounded p-2"
                      required
                    ></textarea>
                    <Button type="submit">Submit</Button>
                  </form>
                </section>
              }
            />
            <Route
              path="/resume"
              element={
                <section>
                  <h2 className="text-xl font-bold mb-4">Resume</h2>
                  <a
                    href="/path-to-resume.pdf"
                    download
                    className="text-blue-500 underline"
                  >
                    Download Resume
                  </a>
                  <ul className="mt-4 list-disc list-inside">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </section>
              }
            />
          </Routes>
        </main>

        <footer className="p-4 bg-gray-800 text-white flex justify-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
