import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import './SelectSchedule.css';
import { Faculty } from '../api/models/Faculty';
import { getAllFaculty } from '../api/API';

function Title(props: { text: string }) {
    return (
        <h5 className="white-text center-align m-auto">{props.text}</h5>
    );
}

export namespace SelectSchedule {
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
export class SelectScheduleComponent extends React.Component<SelectSchedule.IProps, SelectSchedule.IState> {
    state = {
        /*...*/
    };

    constructor(props: SelectSchedule.IProps, context?: object) {
        super(props, context);
    }

/*    selectItem = () => {

    }*/

    render() {
        let faculties: Faculty.IView[] = getAllFaculty();
        return (
            <Collapsible popout={true}>
                {faculties.map(faculty => (
                    <CollapsibleItem
                        key={faculty.key}
                        className="teal lighten-2"
                        header={<Title text={faculty.name}/>}
                        /*onClike={this.selectItem}*/
                    >
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                ))}
            </Collapsible>
        );
    }
}