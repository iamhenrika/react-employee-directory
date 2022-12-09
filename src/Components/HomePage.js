import "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="home">
        <Header />
      </div>
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
