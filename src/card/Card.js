import * as React from "react";
import { InputForm } from "../form/InputForm";

export class Card extends React.Component {
    render() {
        return (
            <div className="page-container">
                <InputForm />
            </div>
        );
    }
}