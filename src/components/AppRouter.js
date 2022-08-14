import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { routerConfig } from "./routerConfig";

export function AppRouter(props) {
  const routeElements = routerConfig.map(function (item, index) {
    return (
      <Route key={index.toString()} path={item.path} element={item.component} />
    );
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>{" "}
          </nav>
        </header>
        <aside className="left-side-bar">
          <h4> A side bar element</h4>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>{" "}
          </nav>
        </aside>

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
