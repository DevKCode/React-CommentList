import React, { Component } from "react";
import {
    Button,
    Grid,
    Row,
    Col,
    Panel,
    PanelBody,
    PanelHeading,
    PanelFooter,
    Glyphicon,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Label
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/fontawesome";

class CommentInput extends Component {
    formSumbit = e => {
        e.preventDefault();
        console.log("Form Submit" + this.refs.userComment);
    };

    render() {
        return ( <
            Form inline onSubmit = { this.formSumbit } >
            <
            FormGroup >
            <
            FormControl type = "text"
            placeholder = "Enter Comment"
            ref = "userComment" /
            >
            <
            Button type = "submit"
            className = "btn btn-success" > { " " }
            Send { " " } <
            /Button>{" "} <
            /FormGroup>{" "} <
            /Form>
        );
    }
}

class CommentList extends Component {
    render() {
        return ( <
            div >
            <
            Label > { this.props.comment } < /Label>{" "} <
            /div>
        );
    }
}

class CommentBox extends Component {
    render() {
        return ( <
            Grid >
            <
            Row className = "show-grid" >
            <
            Col md = { 8 } >
            <
            Panel bsStyle = "primary" >
            <
            Panel.Heading > CommentList < /Panel.Heading>{" "} <
            Panel.Body >
            <
            CommentList comment = "Reall great today " / >
            <
            CommentList comment = "fantastic T20 math last night" / >
            <
            CommentList comment = "What a amazing massage s" / >
            <
            /Panel.Body>{" "} <
            /Panel>{" "} <
            /Col>{" "} <
            Col md = { 4 } > { " " } <
            CommentInput / > { " " } <
            /Col>{" "} <
            /Row>{" "} <
            /Grid>
        );
    }
}

class App extends Component {
    render() {
        return ( <
            div className = "container" >
            <
            CommentBox / >
            <
            /div>
        );
    }
}

export default App;