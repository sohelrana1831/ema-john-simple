import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
