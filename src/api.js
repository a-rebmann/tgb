import axios from "axios";

export { getMessage };

function getMessage() {
    const path = 'http://localhost:5000/greet';
    return axios.get(path).then(response => response.data);
}