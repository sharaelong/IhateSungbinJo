import 'typeface-roboto';

const React = require("react");
const ReactDOM = require("react-dom");
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './main.jsx'

const AppRouter = () => (
  <div>
  <CssBaseline />
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
    </div>
);

const root = document.getElementById("root");
ReactDOM.render(<AppRouter />, root);
