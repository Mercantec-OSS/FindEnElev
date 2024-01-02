import "./app.css";
import App from "./App.svelte";
let target: string;
const app = new App({
  target: document.getElementById("app"),
});

export default app;
