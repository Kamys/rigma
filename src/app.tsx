import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Footer, Navbar, NavItem, Tab, Tabs } from 'react-materialize';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
            <>
                <Navbar
                    brand={<h1 className="nav-bar__title">Rigma</h1>}
                    right={true}
                    fixed={true}
                    className="teal lighten-2"
                />

                <VerticalTimeline>
                    <LessonComponent
                        name="Математика"
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
                </VerticalTimeline>
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