import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BillApplication from './components/BillApplication';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/:save?"
                    key="edit"
                    component={BillApplication}
                />

                <Route
                    path="/view/:id?"
                    key="view"
                    component={BillApplication}
                />
            </Switch>
        </Router>
    );
}

export default (<App />);
