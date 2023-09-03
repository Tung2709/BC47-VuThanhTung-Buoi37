import {configureStore} from "@reduxjs/toolkit"
import { FormSVReducer } from "./rootReducer"

export const store=configureStore({reducer:FormSVReducer})
