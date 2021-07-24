import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authentification from '../pages/authentification';
import UserApp from '../pages/app';
import { withUserAccess } from '../hoc/withUserAccess';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" component={Authentification} />
                <Route path="/" component={withUserAccess(UserApp)} />
                {/* <Route component={error component} /> */}
            </Switch>
        </BrowserRouter>
    );
};
