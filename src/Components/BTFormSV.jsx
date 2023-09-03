import React from 'react'
import FormSVInput from './FormSVInput'
import FormSVTable from './FormSVTable'

const btFormSV = () => {
  return (
	<div className='container-fluid'>
		<h1>BÀI TẬP FORM SINH VIÊN</h1>
		<FormSVInput/>
		<FormSVTable/>
	</div>
  )
}

export default btFormSV
