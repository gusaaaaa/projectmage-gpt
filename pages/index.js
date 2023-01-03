import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [needInput, setNeedInput] = useState("");
  const [contextInput, setContextInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ need: needInput, context: contextInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result.trim());
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>ProjectMage</title>
        <link rel="icon" href="/mage.png" />
      </Head>

      <main className={styles.main}>
        <img src="/mage.png" className={styles.icon} />
        <h3>Project Mage</h3>
        <h4>Write a need</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="need"
            placeholder="Users need a way to quickly browse top ranked movies"
            value={needInput}
            onChange={(e) => setNeedInput(e.target.value)}
          />
          <textarea
            type="input"
            name="context"
            placeholder="Streaming platform, webapp, frontend"
            value={contextInput}
            onChange={(e) => setContextInput(e.target.value)}
            rows={4}
          />
          <input type="submit" value="Generate ticket" />
        </form>
        <textarea
          className={styles.result}
          name="ticket"
          readOnly
          value={result}
          rows={20}
          cols={10}
        />
      </main>
    </div>
  );
}
