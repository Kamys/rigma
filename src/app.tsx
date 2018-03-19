import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

export namespace App {
    export interface Props {
        /*...*/
    }

    export interface State {
        /*...*/
    }
}

const mapStateToProps = (state: any) => ({
    /*...*/
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    /*...*/
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export class AppComponent extends React.Component<App.Props, App.State> {
    state = {
        /*...*/
    };

    constructor(props: App.Props, context?: object) {
        super(props, context);
    }

    render() {
        return <h1>Hello world!</h1>;
    }
}