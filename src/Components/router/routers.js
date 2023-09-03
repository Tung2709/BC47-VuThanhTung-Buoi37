import { useRoutes } from "react-router-dom"
import BTFormSV from "../BTFormSV"

export const useRouters= () =>{
	return useRoutes([
		{	
					index:true,
					element:<BTFormSV/>
			
		}
	])
}