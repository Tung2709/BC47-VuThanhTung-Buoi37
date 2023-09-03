import { createSlice } from "@reduxjs/toolkit"

const initialState={
	SVList:[],
	SVEdit:undefined,
}

const btFormSVSlice=createSlice({
	name:'baitapFormSV',
	initialState,
	reducers:{
		addSV:(state,{payload})=>{
			state.SVList.push(payload)
		},
		delSV:(state,{payload})=>{
			state.SVList=state.SVList.filter(SV=>SV.maSV!==payload)
		},
		editSV:(state,{payload})=>{
			state.SVEdit=payload
		},
		updateSV:(state,{payload})=>{
			const index= state.SVList.findIndex(SV=>SV.maSV===payload.maSV)
			state.SVList[index]=payload
			state.SVEdit=undefined
		}
	}

})

export const {reducer:baitapFormSVReducer,actions : baitapFormSVAction}=btFormSVSlice