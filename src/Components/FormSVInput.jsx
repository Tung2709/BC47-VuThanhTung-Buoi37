import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { baitapFormSVAction } from '../store/baitapFormSV/slice'

const FormSVInput = () => {
	const [formValue, setFromValue] = useState()
	const [formError, setFromError] = useState()
	const dispacth=useDispatch()
	const {SVEdit}=useSelector(state=>state.baitapFormSV)
	useEffect(()=>{if(SVEdit){setFromValue(SVEdit)}},[SVEdit])
	const validate=(ele)=>{
		const { name,validity,title,minLength } = ele
		const {valueMissing,tooShort,patternMismatch} = validity
		let mess=""
		if(valueMissing){
			mess=`${title} không được bỏ trống`
		}else if(patternMismatch){
			if(name==='maSV'||name==="phone"){
				mess=`${title} phải là số `
			}else if(name==="hoTen"){
				mess=`${title} phải là chữ `
			}else if(name==="email"){
			mess=`${title} phải nhập đúng định dạng @gmail.com `}
		}else if(tooShort){
			mess=`${title} nhập tối thiểu ${minLength} chữ số`
	}
	return mess
	}
	const handleFormValue = () => (ev) => {
		const { name, value} = ev.target

		let mess=validate(ev.target)
		
		setFromError({...formError,[name]:mess})
		setFromValue({ ...formValue, [name]: value, })

	}
	return (
		<div className='FormSVInput'>
			<h2 className='text-start mt-2 p-2  bg-dark text-white fs-4'>Thông tin sinh viên</h2>
			<form noValidate onSubmit={(ev) => {
				ev.preventDefault()

				const element=document.querySelectorAll("input")
				
				let error={}
				element.forEach((ele)=>{
					const { name, value} = ele
					let mess=validate(ele)
					error[name]=mess
				})
				setFromError(error)


				let isFlag=false

				for(let key in formError){
					if(formError[key]){
						isFlag=true
						break
					}
				}

				if(isFlag) return
				if(!SVEdit){
					dispacth(baitapFormSVAction.addSV(formValue))
				}else{
					dispacth(baitapFormSVAction.updateSV(formValue))
				}

			}}>
				<div className='row text-start mt-3'>
					<div className="col-6">
						<label>Mã SV</label>
						<input disabled={!!SVEdit} autoComplete='off' type="text" name='maSV' title="Mã SV" value={formValue?.maSV||""} onChange={handleFormValue()} className='form-control' placeholder='Nhập mã SV' required minLength={3} maxLength={5} pattern='^[0-9]+$' />
						<div className='mt-2 mb-2 text-danger' style={{height:15}}>
						{formError?.maSV&&<p style={{margin:0}}>{formError.maSV}</p>}
						</div>
					</div>
					<div className="col-6 ">
						<label>Họ tên</label>
						<input autoComplete='off' type="text" name='hoTen' title="Họ tên"  value={formValue?.hoTen||""} onChange={handleFormValue()} className='form-control' placeholder='Nhập họ tên' required pattern="^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$"  />
						<div className='mt-2 mb-2  text-danger' style={{height:15}}>
						{formError?.hoTen&&<p style={{margin:0}}>{formError.hoTen}</p>}
						</div>
					</div>
					<div className="col-6">
						<label>Số điện thoại</label>
						<input autoComplete='off' type="text" name='phone' title="Số điện thoại"  value={formValue?.phone||""} onChange={handleFormValue()} className='form-control' placeholder='Nhập số điện thoại' required pattern='^[0-9]+$' minLength={10} maxLength={10}  />
						<div className='mt-2 mb-2  text-danger' style={{height:15}}>
						{formError?.phone&&<p style={{margin:0}}>{formError.phone}</p>}
						</div>

					</div>
					<div className="col-6 ">
						<label>Email</label>
						<input autoComplete='off' type="text" name='email' title="Email"  value={formValue?.email||""} onChange={handleFormValue()} className='form-control' placeholder='Nhập Email' required pattern="(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)" />
						<div className='mt-2 mb-2  text-danger' style={{height:15}}>
						{formError?.email&&<p style={{margin:0}}>{formError.email}</p>}
						</div>
					</div>

				</div>
				<div className='mt-3 text-start'>
					{SVEdit?
					<button className='btn btn-primary ms-2'>Cập nhật</button>:
					<button className='btn btn-success'>Thêm sinh viên</button>
					}
				</div>
			</form>
		</div>
	)
}

export default FormSVInput