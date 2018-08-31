import * as React from "react";
import {Container, Row, Col} from "reactstrap";
import { Card } from "../../card/Card";

interface State {
    isOpen: boolean;
}

export class MainContainer extends React.Component<object, State> {
    render() {
        return (
            <div>
                <div className="portal-container">

                    <Container fluid>
                        <Row>
                            <Col lg={{size: 8, offset: 2}} sm={{size: 12}} md={{size: 12}}>
                                <div className="text-container">
                                    <h2>ETT LITE TREVLIGARE SÄTT ATT FÅ TILLBAKA VAD DU LA UT</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={{size: 8, offset: 2}} sm={{size: 12}} md={{size: 12}}>
                                <Card />
                            </Col>
                            <Col lg={{size: 3}} sm={{size: 0}} md={{size: 0}} />
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }
}
