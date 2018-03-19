import { fork } from 'redux-saga/effects';
/*import {registrationSaga} from './registrationSaga'*/

export default function* rootSaga() {
    yield [
        fork(() => {
            return;
        }),
    ];
}