import axios from 'axios';

const instance = axios.create({
    // 🔥 FireBase URL
    baseURL: 'https://react-my-burger-55ff0.firebaseio.com/'
});

export default instance;