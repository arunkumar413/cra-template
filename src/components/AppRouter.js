import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { routerConfig } from "./routerConfig";
import { SideBar } from "./SideBar";

export function AppRouter(props) {
  const routeElements = routerConfig.map(function (item, index) {
    return (
      <Route key={index.toString()} path={item.path} element={item.component} />
    );
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <SideBar />
        <main className="app-main">
          <Routes>{routeElements}</Routes>
        </main>
        <footer className="footer">
          <h2> Footer </h2>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}
