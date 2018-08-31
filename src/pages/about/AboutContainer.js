import * as React from "react";
import {Container, Row, Col} from "reactstrap";
import { AppNavbar } from "../../navbar/AppNavbar";
import { Card } from "../../card/Card";

interface State {
    isOpen: boolean;
}

export class AboutContainer extends React.Component<object, State> {
    render() {
        return (
            <div>
                <div className="about-container">

                    <Container fluid>
                        <Row>
                            <Col lg={{size:6 , offset: 3}} sm={{size: 12}} md={{size: 12}}>
                                Det här är en sandlåda för att testa lite grejer och lära sig nya saker. <br/>
                                Inga personuppgifter sparas. <br/><br/>
                                Tanken med Voita är att:<br/>
                                Göra det lite trevligare att få tillbaka pengar som du har lagt ut. <br/>
                                Slippa oändlig kommunikation angående telefonnummer och hur mycket som ska betalas. <br/>
                                <br/>
                                Mejla <a href="mailto:info@voita.se">info@voita.se</a> för frågor eller kontakt.  
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
