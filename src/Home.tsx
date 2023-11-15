import { Web3Button } from "@web3modal/react";
import "./App.css";

function Home() {
  return (
    <>
      <h1>Pitaka Wallet Connect Example</h1>
      <div className="card">
        <Web3Button />
        <p>
          Click me to test.
        </p>
      </div>
      <p className="read-the-docs">
        Go to our support page for more information.
        <a href="https://support.pitaka.io" target="_blank">
          <p>Pitaka Documentation</p>
        </a>
      </p>
    </>
  );
}

export default Home;
