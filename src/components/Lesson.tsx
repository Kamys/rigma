import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Card, Col, Icon, Row } from 'react-materialize';

export namespace Lesson {
    export interface IProps {
        name: string;
        lessonNumber: number;
        teacherFullName: string;
        location: string;
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
export class LessonComponent extends React.Component<Lesson.IProps, Lesson.IState> {
    state = {
        /*...*/
    };

    constructor(props: Lesson.IProps, context?: object) {
        super(props, context);
    }

    render() {
        const {name, lessonNumber, location, teacherFullName} = this.props;
        return (
            <Card
                className="teal lighten-1 z-depth-5"
                textClassName="white-text"
            >
                <Row>
                    <Col>
                        <h3 className="vertical-timeline-element-title">{name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Icon className="lesson__location_icon md-36">account_circle</Icon>
                    </Col>
                    <Col>
                        <h4 className="vertical-timeline-element-subtitle">{teacherFullName}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Icon className="lesson__location_icon">location_on</Icon>
                    </Col>
                    <Col>
                        <h4 className="vertical-timeline-element-subtitle">{location}</h4>
                    </Col>
                </Row>
            </Card>
        );
    }
}