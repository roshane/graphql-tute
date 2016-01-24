import Relay from 'react-relay';

class Mutations extends Relay.Mutation{

    getMutation(){
        return Relay.QL`mutation {addTask}`;
    }

    getVariables() {
        return {
            text: this.props.task.text
        };
    }

    getFatQuery(){
        return Relay.QL`fragment on AddTaskMutationPayload{
            asset{
                tasks
            }
        }`
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                task: this.props.task.id
            }
        }];
    }

    static fragments = {
        task :()=>Relay.QL`fragment on Task{
            id
            text
        }`
    }
}

export default Mutations;
