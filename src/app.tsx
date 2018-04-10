import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Footer, Navbar, NavItem } from 'react-materialize';
import { SelectScheduleComponent } from './components/SelectSchedule/SelectSchedule';

export namespace App {
    export interface IProps {
        /*...*/
    }

    export interface IState {
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
export class AppComponent extends React.Component<App.IProps, App.IState> {
    state = {
        /*...*/
    };

    constructor(props: App.IProps, context?: object) {
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
                <div className={'container'}>
                    <SelectScheduleComponent/>
                </div>
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