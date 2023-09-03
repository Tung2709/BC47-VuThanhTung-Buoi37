import { combineReducers } from "redux";
import { baitapFormSVReducer } from "./baitapFormSV/slice";


export const FormSVReducer=combineReducers({
	baitapFormSV:baitapFormSVReducer,
})