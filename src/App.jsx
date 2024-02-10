import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import UserProvider from "./context/UserProvider";
function App() {
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;
