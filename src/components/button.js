import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/actiontypes'

let styles = {
    backgroundColor: 'black',
    color:'white',
    padding: '15px 20px',
    border:'2px solid black',
    borderRadius:'2px',
    cursor:'pointer',
    marginBottom:'20px',
    textTransform:'uppercase',
    width:'150px',
}


class Button extends Component{
    constructor(props){
        super(props);
        this.state = { hover: false};
    }
    render(){
        return(
            <div>
                <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'red' }}
                onMouseOut = {() => {this.setState( {hover: false}) }}
                onMouseOver = {() => {this.setState({hover:true}) }}
                onClick={this.props.getNews}
                >Click here</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getNews: getNews,
}

Button = connect(
    null,
    mapDispatchToProps,
)(Button);

export default Button;
