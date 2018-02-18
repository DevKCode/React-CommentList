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
        console.log("Form Submit" + this.textInput.value);
        this.props.onSubmit(this.textInput.value);
    };

    render() {
        return ( <
            Form inline onSubmit = { this.formSumbit } >
            <
            FormGroup >
            <
            FormControl type = "text"
            placeholder = "Enter Comment"
            inputRef = {
                ref => {
                    this.textInput = ref;
                }
            }
            />{" "} <
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
                div > { " " } {
                    this.props.comment.map(card => < Label > { card.text } < /Label>)}{" "} <
                        /div>
                    );
                }
            }

            class CommentBox extends Component {
                state = {
                    data: [
                        { text: "What a awesome match yesterday " },
                        { text: "Great to have a Lunch today " },
                        { text: "Went for a shopping today " }
                    ]
                };

                addNewData = newData => {
                    this.setState(preState => ({
                        data: preState.data.concat({ text: newData })
                    }));
                };
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
                        CommentList comment = { this.state.data }
                        />{" "} <
                        /Panel.Body>{" "} <
                        /Panel>{" "} <
                        /Col>{" "} <
                        Col md = { 4 } >
                        <
                        CommentInput onSubmit = { this.addNewData }
                        />{" "} <
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