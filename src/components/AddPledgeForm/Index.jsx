import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './AddPledgeForm.css'

//Need to figure out how to key from URL to use as project_id

const initialState = {
	"amount": 0,
	"comment": "",
	"anonymous": false,
	"project_id": 11
}

function AddPledgeForm() {

    const[pledge, setPledge] = useState(initialState)

    const token = window.localStorage.getItem("token")

    const navigate = useNavigate()

    const { id } = useParams()
       
    const handleInputChange = (e) => {
            e.preventDefault();

            const newState = {
                ...pledge,
                [e.target.name]: e.target.value,
            }
            setPledge(() => newState)
    }
        console.log(pledge)

    const handleSubmit = (e) => {
            e.preventDefault();

            postData().then((response) => {
                console.log(response)
                navigate(`/project/${pledge.project_id}`)})           
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
        }

    return (
    <div className='form'>
        <div>
            <label className='form_label' htmlFor='amount'>Pledge Amount:</label>
            <input className='form_input' name='amount' type='integer' placeholder='Your pledge amount'
            onChange={handleInputChange}/>
        </div>
        <div>
            <label className='form_label' htmlFor='comment'>Message:</label>
            <input className='form_message' name='comment' type='text' placeholder='Your message'
            onChange={handleInputChange}/>
        </div>
        <div>
            <button type='submit' onClick={handleSubmit}>Add my pledge!</button>
        </div>
    </div>
    )
}

export default AddPledgeForm