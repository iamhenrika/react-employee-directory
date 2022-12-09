import "./styles.css";
import Header from "./Components/Header";
import Search from "./Components/SearchBar";
import EmployeeList from "./Components/EmployeeList";

export default function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <Search />
        <EmployeeList />
      </div>
    </div>
  );
}
