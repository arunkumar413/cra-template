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
            <ol>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>{" "}
              </li>
            </ol>
          </nav>
        </header>
        <aside className="left-side-bar">
          <nav>
            <span>
              <Link to="/"> Home</Link>
            </span>
            <span>
              <Link to="/about"> About</Link>
            </span>
            <span>
              <Link to="/contact"> Contact</Link>{" "}
            </span>
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
