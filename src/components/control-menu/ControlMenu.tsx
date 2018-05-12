import * as React from "react";

type Props = {
    onChange: (e: any) => void;
}

type State = {}

export class ControlMenu extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div>
                <p>Show me </p>
                <select onChange={this.props.onChange}>
                    <option value="public">public</option>
                    <option value="private">private</option>
                    <option value="all">all</option>
                </select>
                <p> projects</p>
            </div>
        );
    };
}
