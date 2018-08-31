import React from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Container, Row, Col} from "reactstrap";

interface State {
    swishRequest: SwishRequest;
    url: string;
    textMessage: string;
}

interface SwishRequest {
    version: number;
    payee: SwishStringParams;
    amount: SwishNumberParams;
    message: SwishStringParmas;
}

interface SwishStringParams {
  value: string;
  editable: boolean;
}

interface SwishNumberParams {
  value: number;
  editable: boolean;
}

export class InputForm extends React.Component<object, State> {
  constructor(props: object) {
        super(props);
        
        console.log("constructing");

        this.state = this.getInitialState();

        this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log("Handle submit");
    event.preventDefault();

    const data = JSON.stringify(this.state.swishRequest);
    const randomString = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2,5);
    
    
    this.setState({url: "swish://payment?data=" + encodeURIComponent(data)});
    this.setState({textMessage: "Hej! Pls när du har tid betal gärna " + this.state.swishRequest.message.value + " på " + this.state.swishRequest.amount.value + " kr via " + "voita.se/" + randomString});
  }

  getInitialState() {
    return {
        url: "",
        swishRequest: {"version" : 1, 
                       "payee" : {"value" : "", "required" : false},
                       "amount": {"value" : null, "required" : true},
                       "message": {"value" : "", "required" : true}
                     },
        textMessage: ""
    };
  } 

  handlePayeeChange(event) {
    const req = this.state.swishRequest;
    req.payee.value = event.target.value;
    this.setState({swishRequest: req})
  }

  handleAmountChange(event) {
    const req = this.state.swishRequest;
    req.amount.value = new Number(event.target.value);
    this.setState({swishRequest: req})
  }

  handleMessageChange(event) {
    const req = this.state.swishRequest;
    req.message.value = event.target.value;
    this.setState({swishRequest: req})
  }

  render() {
    return (
      <div className="input-form">
        <Container fluid>
          <Row>
              <Col lg={{size: 4, offset: 0}} sm={{size: 6}} md={{size: 6}}>
                <Form className="input-form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label >Ditt swish-nummer</Label>
                    <Input type="number" name="payee" id="payee" onChange={event => this.handlePayeeChange(event)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label >Skuld</Label>
                    <Input type="number" name="amount" id="amount" onChange={event => this.handleAmountChange(event)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Varför</Label>
                    <Input type="textarea" name="message" id="message" onChange={event => this.handleMessageChange(event)}/>
                  </FormGroup>
                  <Button className="form-submit-button" type="submit">Skapa betallänk</Button>
                </Form>
              </Col>
              <Col lg={{size: 6, offset: 1}} sm={{size: 6}} md={{size: 6}}>
                <div className="genereated-message" >
                    <Label>
                      <a href={this.state.url}>{this.state.textMessage}</a>
                    </Label>
                </div>        
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}