import {decode as base64_decode, encode as base64_encode} from 'base-64';
import firebase from '../firebase'

export const createUser = async (username) => {
    try {
        const newUser = {
            created: firebase.firestore.FieldValue.serverTimestamp(),
            username,
            calms: {
                culture: 1,
                automation: 1,
                lean: 1,
                measurement: 1,
                sharing: 1
            }
        }
        const user = await firebase.firestore().collection("calms-map").add(newUser).then(doc => {
            const responseNewUser = newUser
            responseNewUser.id = doc.id
            return responseNewUser
        })

        // console.log(user);

        const uid = base64_encode(user.id)
        localStorage.setItem('uid', uid)

        return true

    } catch (err) {
        console.error(err);
    }
}

export const getUser = async (setUser) => {
    try {
        const uid = localStorage.getItem('uid')
        const id = base64_decode(uid)
        const response = await firebase.firestore().collection('calms-map')
        const data = await response.get()
        const users = data.docs.map(user => ({
            id: user.id,
            ...user.data() 
        }))

        const user = users.find(user => user.id === id)
        setUser(user)

        return !user ? false : true

    } catch (err) {
        console.error(err);
    }
}

export const saveUser = async (user) => {
    try {
        await firebase.firestore().collection("calms-map").doc(user.id).update({ calms: user.calms })
    } catch (err) {
        console.error(err);
    }
}
