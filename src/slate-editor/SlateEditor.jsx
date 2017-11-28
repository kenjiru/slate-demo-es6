import * as React from 'react';
import { Component } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                kind: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        kind: 'text',
                        leaves: [{ text: 'A line of text in a paragraph.' }]
                    }
                ]
            }
        ]
    }
});

class SlateEditor extends Component {
    state = {
        value: initialValue
    };

    render() {
        return (
                <Editor
                    value={this.state.value}
                    onChange={this.handleChange}
                />
        );
    }

    handleChange = (value) => {
        this.setState({
            value
        });
    }
}

export default SlateEditor;
