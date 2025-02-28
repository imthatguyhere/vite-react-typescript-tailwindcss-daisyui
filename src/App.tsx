import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-base-200 p-6 rounded-xl">
      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">
        DaisyUI Component Showcase
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/*=-- Button Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Button</h2>
          <button className="btn btn-primary mt-2" onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
        </div>

        {/*=-- Alert Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Alert</h2>
          <div className="alert alert-success">Success Alert</div>
        </div>

        {/*=-- Badge Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Badge</h2>
          <span className="badge badge-secondary">New</span>
        </div>

        {/*=-- Card Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold">Card</h2>
          <div className="card-body">
            <p>This is a simple card component.</p>
          </div>
        </div>

        {/*=-- Accordion (Collapse) Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Accordion</h2>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="test-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              What is option one?
            </div>
            <div className="collapse-content text-sm">This is option one.</div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="test-accordion-2" />
            <div className="collapse-title font-semibold pb-5">
              What is option two?
            </div>
            <div className="collapse-content text-sm">This is option two.</div>
          </div>
        </div>

        {/*=-- Avatar Component */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-5">Avatar</h2>
          <div className="avatar mx-auto">
            <div className="w-16 rounded-full">
              <img src="https://placehold.co/64" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-sm">
        Click on the Vite and React logos to learn more.
      </p>
      <p className="text-center mt-2 text-sm">
        A template by Imthatguyhere (ITGH | Tyler).
      </p>
    </div>
  );
}

export default App;
