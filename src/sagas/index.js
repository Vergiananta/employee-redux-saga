import { all } from "redux-saga/effects";
import { watchFindAllEducation, watchRemoveEducationById, watchSaveEducation } from "./education";
import { watchFindAllExperience, watchRemoveExperienceById, watchSaveExperience } from "./experience";
import { watchFindAllUsers, watchFindUserById, watchRemoveUserById, watchSaveUnit } from "./user";


export default function* rootSaga() {
    yield all([
        watchSaveUnit(), watchSaveExperience(), watchSaveEducation(),
        watchFindAllEducation(), watchFindAllUsers(), watchFindAllExperience(),
        watchRemoveEducationById(), watchRemoveExperienceById(), watchRemoveUserById(),
        watchFindUserById()
    ])
}