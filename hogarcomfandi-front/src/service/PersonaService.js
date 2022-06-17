import axios from 'axios';

export class PersonaService{

    baseURL = "http://localhost:8080/api/persona"

    getAll(){
        return axios.get(this.baseURL + "/lista").then(res => res.data);
    }

    save(persona){
        return axios.post(this.baseURL +"/guardar", persona).then(res => res.data);
    }
}