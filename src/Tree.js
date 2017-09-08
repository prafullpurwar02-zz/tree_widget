import React, { Component }  from 'react';

class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    toggle = () => {
        this.setState({visible: !this.state.visible});
    };


    render() {
        var child;
        var classObj;

        if (this.props.node.child != null) {
            child = this.props.node.child.map(function(node, index) {
                return <li key={index}><Tree node={node} /></li>
            });

            classObj = {
                togglable: true,
                "togglable-down": this.state.visible,
                "togglable-up": !this.state.visible
            };
        }

        var style;
        if (!this.state.visible) {
            style = {display: "none"};
        }

        return (
            <div>
                <h5 onClick={this.toggle} >
                    {this.props.node.label}
                </h5>
                <ul style={style}>
                    {child}
                </ul>
            </div>
        );
    }
}







export default Tree;




















