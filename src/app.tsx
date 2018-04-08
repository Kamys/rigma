import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Footer, Navbar, NavItem } from 'react-materialize';

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
        return (
            <>
                <Navbar
                    brand={<h1 className="nav-bar__title">Rigma</h1>}
                    right={true}
                    fixed={true}
                    className="teal lighten-2"
                />

                <Footer
                    className="teal lighten-2"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right">@ 2018 created Nikita Kamyshenko</a>
                    }
                />
            </>
        );
    }
}