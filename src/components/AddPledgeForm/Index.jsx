import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './AddPledgeForm.css'


const initialState =
{
	"amount": 0,
	"comment": "",
	"anonymous": false,
	"project_id": '${projectData.id}'
}

function AddPledgeForm() {

        const[pledge, setPledge] = useState(initialState)

        const token = window.localStorage.getItem("token",)

        const handleChange = (e) => {
            e.prevent.default()
            const newState = {
                ...pledge,
                [e.target.name]: e.target.value,
            }
            setPledge(() => newState)
        }

        console.log(pledge)

        const handleSubmit = (e) => {
            e.prevent.default()
            postData().then((response) => {
                console.log(response)
                Navigate("/")})
        }

        const postData = async() => {
            const response = await
                fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
                    method: "post",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify(pledge),
                })
                return response.json()
                console.log("pledge:",pledge)
        }

    return (
    <div className='form'>
        <div>
            <label className='form_label' htmlFor='amount'>Pledge Amount</label>
            <input className='form_input' name='amount' type='integer' placeholder='Your pledge amount' onchange={handleChange}/>
        </div>
        <div>
            <label className='form_label' htmlFor='comment'>Message</label>
            <input className='form_message' name='comment' type='text' placeholder='Your message' onchange={handleChange}/>
        </div>
        <div>
            <button type='submit' onClick={handleSubmit}>Add my pledge!</button>
        </div>

    </div>

    )
}

export default AddPledgeForm