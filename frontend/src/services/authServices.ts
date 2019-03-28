import axios  from 'axios';
import { isNull } from 'util';

function loginUser(username: String, password: String){
    let token = axios.post('http://localhost:4000/graphql');
}

function registerUser(username: String, password: String){
    
}