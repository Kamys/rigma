import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Badge, Card, CardTitle, Col, Collection, CollectionItem, Row } from 'react-materialize';
import { LessonComponent } from './components/Lesson';

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
            <Row>
                <Col m={4} s={12}>
                    <LessonComponent/>
                </Col>
                <Col m={4} s={12}>
                    <LessonComponent/>
                </Col>
                <Col m={4} s={12}>
                    <LessonComponent/>
                </Col>
                <Col m={4} s={12}>
                    <LessonComponent/>
                </Col>
            </Row>
        );
    }
}