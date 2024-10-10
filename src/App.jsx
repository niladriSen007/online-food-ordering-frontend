import { Suspense } from "react"
import { Router } from "./Routers/Router"

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router />
    </Suspense>
  )
}
export default App
