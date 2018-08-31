import * as React from "react";
import {Container, Row, Col} from "reactstrap";
import { AppNavbar } from "../../navbar/AppNavbar";
import { Card } from "../../card/Card";

interface State {
    isOpen: boolean;
}

export class LoginContainer extends React.Component<object, State> {
    render() {
        return (
            <div>
                <div className="login-container">

                    <Container fluid>
                        <Row>
                            <Col lg={{size:6 , offset: 3}} sm={{size: 12}} md={{size: 12}}>
                                Här kan du snart logga in och se dina skickade betalningar samt hålla koll på om de är betalda eller inte.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
