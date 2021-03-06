import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Start from "./pages/Start";
import Selection from "./pages/Selection";
import Summary from "./pages/Summary";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

import Success from "./pages/Success";
import Failure from "./pages/Failure";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.START} element={<Start />} />
        <Route path={ROUTES.SELECTION} element={<Selection />} />
        <Route path={ROUTES.SUMMARY} element={<Summary />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path={ROUTES.SUCCES} element={<Success />} />
        <Route path={ROUTES.FAILURE} element={<Failure />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;