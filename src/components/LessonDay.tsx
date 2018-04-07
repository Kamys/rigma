import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { LessonComponent } from './Lesson';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Card } from 'react-materialize';

export namespace LessonDay {
    export interface Props {
        name: string;
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
export class LessonDayComponent extends React.Component<LessonDay.Props, LessonDay.State> {
    state = {
        /*...*/
    };

    constructor(props: LessonDay.Props, context?: object) {
        super(props, context);
    }

    render() {
        return (
            <div className="container">
                <LessonComponent
                    name={this.props.name}
                    lessonNumber={3}
                    location="203н"
                    teacherFullName="Коптелова Л.В."
                />
                <LessonComponent
                    name="Физика"
                    lessonNumber={4}
                    location="401"
                    teacherFullName="Александров В.В."
                />
                <LessonComponent
                    name="Литература"
                    lessonNumber={5}
                    location="302"
                    teacherFullName="Шевченко Е.И."
                />
            </div>
        );
    }
}