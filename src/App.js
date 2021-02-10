import Router from "./router/Router";
import HomePage from './pages/HomePage/index';
import GlobalState from "./global/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}
