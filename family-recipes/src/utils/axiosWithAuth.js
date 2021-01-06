import axios from 'axios'
import {useState} from 'react'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL:"https://ptbw191-secretfamilyrecipes.herokuapp.com",
        headers:{
            Authorization:token
        }
    })
}