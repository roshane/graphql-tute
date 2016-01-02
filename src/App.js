import React from 'react'
import { render } from 'react-dom'
import TodoComponent from './components/TodoComponent';

class App extends React.Component{

    constructor(){
        super()
    }

    render(){
        console.log(`[App] props ${JSON.stringify(this.props)}`);
        return <div>
            <TodoComponent {...this.props} />
        </div>
    }
}

export default App;