import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Tab, Tabs } from 'react-materialize';
import { LessonDayComponent } from './LessonDay';

export namespace Week {
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
export class WeekComponent extends React.Component<Week.Props, Week.State> {
    state = {
        /*...*/
    };

    constructor(props: Week.Props, context?: object) {
        super(props, context);
    }

    render() {
        return (
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
        );
    }
}