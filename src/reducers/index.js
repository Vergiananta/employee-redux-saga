import { combineReducers } from "redux";
import {saveUser, findAllUsers, removeUserById, findUserById} from './userReducer';
import {saveEducation, findAllEducation, removeEducationById} from './educationReducer';
import {saveExperience, removeExperienceById, findAllExperience} from './experienceReducer';

const rootReducer = combineReducers({
    saveExperience, saveUser, saveEducation,
    findAllUsers, findAllEducation, findAllExperience,
    removeExperienceById, removeUserById, removeEducationById, 
    findUserById
})

export default rootReducer