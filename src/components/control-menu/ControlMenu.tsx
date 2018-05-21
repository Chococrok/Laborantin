import * as React from "react";
import { Visibility } from "../../models";

type Props = {
    onVisibilityChange: (e: any) => void;
    onTokenValidation: (tokenValue: string) => void;
}

type State = {}

export class ControlMenu extends React.Component<Props, State> {

    private tokenInputValue: string;

    public constructor(props: Props) {
        super(props);
        this.state = {};

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.handleTokenChange = this.handleTokenChange.bind(this);
        this.handleTokenValidation = this.handleTokenValidation.bind(this);
    }

    private handleVisibilityChange(event: any) {
        this.props.onVisibilityChange(event.target.value);
    }

    private handleTokenChange(event: any) {
        this.tokenInputValue = event.target.value;
    }

    private handleTokenValidation() {
        this.props.onTokenValidation(this.tokenInputValue);
    }

    public render(): JSX.Element {
        return (
            <div>
                <p>Show me </p>
                <select onChange={this.handleVisibilityChange} defaultValue={Visibility.ALL}>
                    <option value={Visibility.ALL}>all</option>
                    <option value={Visibility.PUBLIC}>public</option>
                    <option value={Visibility.INTERNAL}>internal</option>
                    <option value={Visibility.PRIVATE}>private</option>
                </select>
                <p> projects</p>
                <input onChange={this.handleTokenChange}></input>
                <button onClick={this.handleTokenValidation}></button>
            </div>
        );
    };
}
