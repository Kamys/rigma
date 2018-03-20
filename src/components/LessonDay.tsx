import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Badge, Card, CardTitle, Col, Collection, CollectionItem, Row } from 'react-materialize';

export namespace LessonDay {
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

const lessonList = [
    'История',
    'Математика',
    'Физра',
    'Геометрия',
];

@(connect(mapStateToProps, mapDispatchToProps) as any)
export class LessonDayComponent extends React.Component<LessonDay.Props, LessonDay.State> {
    state = {
        /*...*/
    };

    constructor(props: LessonDay.Props, context?: object) {
        super(props, context);
    }

    render() {
        return (
            <Card
                header={<h4 className="white-text center">Пн</h4>}
                className="teal lighten-1"
                textClassName="white-text"
            >
                <Collection className="teal lighten-1">
                    {lessonList.map((lesson, index) => (
                        <CollectionItem key={index} className="teal lighten-1">
                            <Row>
                                <Col>
                                    <Row>10:20</Row>
                                    <Row>12:30</Row>
                                </Col>
                                <Col className="text-center">
                                    <b>{lesson}</b>
                                </Col>
                            </Row>
                        </CollectionItem>
                    ))}
                </Collection>
            </Card>
        );
    }
}