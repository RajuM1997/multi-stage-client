import "./App.css";
import "react-phone-number-input/style.css";
import "react-date-picker/dist/DatePicker.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
