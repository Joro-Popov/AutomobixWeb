import store from '../store';

const ApiConfig = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_By3xjEW6H";
    const appSecret = "b46d810295e94f0bb6ce813a7b00cf73";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginSuccess(token) {
        return {
          type: 'LOGIN',
          token
        }
    }

    async function loginUser(username, password) {
        const endpoint = `${baseUrl}user/${appKey}/login`;
        const data = { username, password };
        const config = {
            method: 'POST',
            url: endpoint,
            headers: { 
                'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(endpoint, config);
        const userInfo = await response.json();

        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);

        const token = sessionStorage.getItem('authToken');

        store.dispatch(loginSuccess(token));
    }

    async function registerUser(username, password) {
        const endpoint = `${baseUrl}user/${appKey}/`;
        const data = { username, password };
        const config = {
            method: 'POST',
            url: endpoint,
            headers: { 
                'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(endpoint, config);
        const userInfo = await response.json();

        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
    }

    async function logoutUser() {
        const endpoint = `${baseUrl}user/${appKey}/logout`;
        const config = {
            method: 'POST',
            url: endpoint,
            headers: { 
                'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        }
        await fetch(endpoint, config);
        sessionStorage.clear();
    }
    return {
        loginUser,
        registerUser,
        logoutUser,
    }
})();

export default ApiConfig;
