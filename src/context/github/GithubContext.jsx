import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const githubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Search users
    const searchUsers = async (text) => {
        setLoading();
        const params = new URLSearchParams({ q: text });
        const response = await fetch(`${Github_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const { items } = await response.json()

        dispatch({ type: 'GET_USERS', payload: items })
    }

    // set loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    // clear users from state 
    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    return <githubContext.Provider value={{ users: state.users, loading: state.loading, searchUsers, clearUsers }}>
        {children}
    </githubContext.Provider>

}

export default githubContext;