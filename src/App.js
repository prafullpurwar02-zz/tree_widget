import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './Tree';

class App extends Component {
  render() {
    return (
        <Tree node={tree}/>
    );
  }
}

var tree = {
    "id": 1,
    "label": "A",
    "child": [
        {
            "id":2,
            "label": "B"
        },
        {
            "id":3,
            "label": "E",
            "child": [
                {
                    "id":4,
                    "label": "F",
                    "child": [
                        {
                            "id":5,
                            "label": "G"
                        }
                    ]
                },
                {
                    "id":6,
                    "label": "H",
                    "child": [
                        {
                            "id":7,
                            "label": "F",
                            "child": [
                                {
                                    "id":8,
                                    "label": "H"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export default App;
