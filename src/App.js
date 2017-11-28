import React, {Component} from 'react';
import SlateEditor from "./slate-editor/SlateEditor";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SlateEditor/>
            </div>
        );
    }
}

export default App;
