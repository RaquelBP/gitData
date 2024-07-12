import { createContext, useContext, useState } from "react";
import axios from 'axios'

const urlBase = `https://api.github.com/users/`
const GitContext = createContext()

export const GitProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])
    const getNewUser = async (username) => {
        const newUser = await axios.get(urlBase + username)
        setUser(newUser)
    }
    const getRepos = async (username) => {
        const newRepos = await axios.get(urlBase + username + '/repos')
        setRepos(newRepos)
        console.log(repos)
    }
    /*const changeUser = (newUser) => {
        setUser(newUser)
    }*/
    return (
        <GitContext.Provider value={{user, getNewUser, repos, getRepos}}>
            {children}
        </GitContext.Provider>
    )
}

export const useGit = () => useContext(GitContext)