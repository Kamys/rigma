import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Footer, Navbar, NavItem, Tab, Tabs } from 'react-materialize';
import { LessonDayComponent } from './components/LessonDay';

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

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };

        return (
            <>
                <Navbar
                    brand={<h1 className="nav-bar__title">Rigma</h1>}
                    right={true}
                    fixed={true}
                    className="teal lighten-2"
                />
                <Tabs tabOptions={{swipeable: true}} className="teal lighten-2 z-depth-1">
                    <Tab className={'white-text'} active={true} title="ПН">
                        <LessonDayComponent name="Математика 1"/>
                    </Tab>
                    <Tab title="ВТ" active={true}>
                        <LessonDayComponent name="Математика 2"/>
                    </Tab>
                    <Tab title="СР">
                        <LessonDayComponent name="Математика 3"/>
                    </Tab>
                    <Tab title="ЧТ">Test 4</Tab>
                    <Tab title="ПТ">Test 4</Tab>
                </Tabs>
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