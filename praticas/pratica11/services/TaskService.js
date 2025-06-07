import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

function getTask() {
    return axios
    .get(`${API_URL}/`)
    .then((response) => response.data)
    .catch((error) => {throw error;});
}

function addTask(){
    return axios
    .post(`${API_URL}/`, task)
    .then((response) => response.data)
    .catch((error) => {throw error;});
}

function updateTask() {
    return axios
    .put(`${API_URL}/${taskId}`, task)
    .then((response)=> response.data)
    .catch((error) =>{throw error;});
}

function deleteTask(){
    return axios
	.delete(`${API_URL}/${taskId}`)
	.then((response) => response.data)
	.catch((error) => {
  	throw error;});
}

export {getTask, addTask, deleteTask, updateTask};