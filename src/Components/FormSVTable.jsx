import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baitapFormSVAction } from '../store/baitapFormSV/slice'

const FormSVTable = () => {
	const { SVList } = useSelector((state) => state.baitapFormSV)
	const [valueSearch, setValueSearch] = useState()
	const [search, setSearch] = useState()
	const svsearch = SVList.filter((sv) => sv.maSV.includes(search))

	const dispacth = useDispatch()
	return (
		<div className='text-start mt-3'>
			<div className='d-flex gap-1'>
				<input type="text" className='w-50' placeholder='Nhập mã sinh viên' onChange={(ev) => { setValueSearch(ev.target.value) }} /><button className='btn btn-primary' onClick={() => { setSearch(valueSearch) }}>Search</button>

			</div>
			<table className='border w-100'>
				<thead className='bg-dark text-white'>
					<tr >
						<th className='p-2'>Mã SV</th>
						<th>Họ tên</th>
						<th>Số điện thoại</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{(svsearch.length?svsearch:SVList).map(SV => (
						<tr className='pt-2' key={SV.maSV}>
							<td>{SV.maSV}</td>
							<td>{SV.hoTen}</td>
							<td>{SV.phone}</td>
							<td>{SV.email}</td>
							<td>
								<div>
									<button className='btn btn-warning' onClick={() => { dispacth(baitapFormSVAction.editSV(SV)) }}>Edit</button>
									<button className='btn btn-danger ms-3' onClick={() => { dispacth(baitapFormSVAction.delSV(SV.maSV)) }}>Delete</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default FormSVTable