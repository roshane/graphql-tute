import Relay from 'react-relay';
import MainView from './../TodoListView';

class Route extends Relay.Route {
    static queries = {
        assets: ()=> Relay.QL`query {
            assets
            ${MainView.getFragment('assets')}
        }`
    };

    static routeName = "AppRoute";
}

export default Route;
