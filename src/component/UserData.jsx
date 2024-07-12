import { useGit } from '../context/GitContext'
const UserData = () => {
    const {user, repos} = useGit()
    return(
        
            <> {user.data &&
                <div>
                    <h1>{user.data.name}</h1>
                    <p>Nombre de usuario: {user.data.login}</p>
                    <p>Número de seguidores: {user.data.followers}</p>
                    <p>Número de repositorios públicos: {user.data.public_repos}</p>
                    <img src={user.data.avatar_url} alt="" />
                    <ul>
                        {repos.data?.map((repo, index) => <li key={index}>{repo?.name}</li>)}
                    </ul>
                </div>
            }
            </>
       
    )
}

export default UserData

