import Relay from 'react-relay';

class Mutations extends Relay.Mutation{

    getMutation(){
        return Relay.QL`mutation {addTodo}`;
    }

    getVariables() {
        let {item,completed}=this.props.todo;

        return {
            item,
            completed
        };
    }

    getFatQuery(){
        return Relay.QL`fragment on TodoItem{
            id
            item
            completed
        }`
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                todo: this.props.todo.id,
            }
        }]
    }

    static fragments = {
        todo :()=>Relay.QL`fragment on TodoItem{
            id
            completed
            item
        }`
    }
}

export default Mutations;
