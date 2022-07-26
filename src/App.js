import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { DefaultLayout } from "~/components/Layout";
import { publicRoutes } from '~/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(route => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            }
            else if (route.layout === null) {
              Layout = Fragment
            }
            else {
              Layout = Layout;
            }

            return <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              key={route.key} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
