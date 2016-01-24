import Relay from 'react-relay';
import MainView from './../TaskList';

class Route extends Relay.Route {
    static queries = {
        asset: ()=> Relay.QL`query { asset }`
    };

    static routeName = "AppRoute";
}

export default Route;
