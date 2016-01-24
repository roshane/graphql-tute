import Relay from 'react-relay';

class Route extends Relay.Route {
    static routeName = 'Home';
    static queries = {
        story: () => Relay.QL`query StoryQuery {story}`
    };
}
export default Route;