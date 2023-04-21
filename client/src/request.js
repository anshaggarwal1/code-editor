// import { useContext } from 'react';
// import { UserContext } from '../Providers/UserContext';
import { to } from 'await-to-js';

export default async function request(method, url, body = {}, params = {}) {
    console.log('before api call body ', body, ' : ', new Date());
    // let [user, setUser] = useContext(UserContext);

    let headers = {
        'Content-Type': 'application/json;charset=utf-8'
    };


    // switch (true) {
    //    case token:
    //    return [Error('Not authenticated'), null];
    //    break;
    // }

    let err, response;

    url = `http://localhost:3231${url}`;

    switch (method.toLowerCase()) {
        case 'get':
            [err, response] = await to(
                fetch(url, {
                    headers,
                    method: 'get',
                    ...params
                })
            );
            break;
        case 'post':
        case 'put':
        case 'patch':
        case 'delete':
            [err, response] = await to(
                fetch(url, {
                    headers,
                    method: method.toLowerCase(),
                    body: JSON.stringify(body),
                    ...params
                })
            );
            break;
        default:
            err = new Error('Invalid method');
            break;
    }
    response = response && (await response.json());
    return [err, response];
}