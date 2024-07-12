import { useGit } from '../context/GitContext'
import {useState} from 'react'

const Input = () => {
    const {user, getNewUser, getRepos} = useGit()
    const [username, setUsername] = useState()
    function fetchUser(username){
        getNewUser(username)
        getRepos(username)
    }
    return (
        <>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <button onClick={() => fetchUser(username)}>Buscar</button>
        </>
    )
}

export default Input