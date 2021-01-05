import axios from 'axios';

const KEY = 'AIzaSyDYiJwy0yDBW8tCpni3ny12BmIL7J2hj7M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});