import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Badge, Card, CardTitle, Col, Collection, CollectionItem, Icon, Row } from 'react-materialize';

export namespace Lesson {
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
export class LessonComponent extends React.Component<Lesson.Props, Lesson.State> {
    state = {
        /*...*/
    };

    constructor(props: Lesson.Props, context?: object) {
        super(props, context);
    }

    render() {
        return (
            <Col m={7} s={8}>
                <Card
                    style={{
                        // margin:
                    }}
                    header={<h5 className="white-text pt-1 pl-1"><b>Матемитика</b></h5>}
                    className="blue-grey darken-1"
                    textClassName="white-text"
                >
                    <Row>
                        <Col m={7} s={12}>
                            <Row>
                                <Col m={1} s={1}><Icon>account_circle</Icon></Col>
                                <Col className="valign-wrapper"><b>Иванов Петечкин</b></Col>
                            </Row>
                        </Col>
                        <Col m={7} s={12}>
                            <Row>
                                <Col m={1} s={1}><Icon>account_circle</Icon></Col>
                                <Col className="valign-wrapper"><b>302н</b></Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}