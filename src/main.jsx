import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
)
