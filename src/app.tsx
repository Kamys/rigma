import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import {
    Badge, Card, CardTitle, Col, Collection, CollectionItem, Footer, Icon, Navbar, NavItem, Row, Tab,
    Tabs
} from 'react-materialize';
import 'react-vertical-timeline-component/style.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
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
                <div className="slider_container">
                    <Slider {...settings}>
                        <div>
                            <LessonDayComponent
                                name="Математика 1"
                            />
                        </div>
                        <div>
                            <LessonDayComponent
                                name="Математика 2"
                            />
                        </div>
                        <div>
                            <LessonDayComponent
                                name="Математика 3"
                            />
                        </div>
                    </Slider>
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