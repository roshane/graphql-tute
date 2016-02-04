import Relay from 'react-relay';

class AddTaskMutation extends Relay.Mutation{

    getMutation(){
        return Relay.QL`mutation {addTask}`;
    }

    getVariables() {
        return {
            text: this.props.text
        };
    }

    getFatQuery(){
        return Relay.QL`fragment on AddTaskMutationPayload{
            asset{
                id
                tasks
            }
        }`
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                asset: this.props.asset.id
            }
        }];
    }

    static fragments = {
        asset :()=>Relay.QL`fragment on Asset{
            id
            tasks
        }`
    }
}

export default AddTaskMutation;
