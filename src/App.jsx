import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoList from "./ToDoList";
function App() {
  return (
    <>
      <ToDoList />
      <footer>
        <p className="footer-text">Created with &#9829; by Pinatic</p>
      </footer>
    </>
  );
}

export default App;
