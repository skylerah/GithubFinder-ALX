import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const githubContext = createContext();

const Github_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
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

    // Get a single users
    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${Github_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = '/not-found';
        } else {
            const data = await response.json()
            dispatch({ type: 'GET_USER', payload: data })
        }
    }

    // Get user repos
    const getUserRepos = async (login) => {
        setLoading();
        const sortParams = new URLSearchParams({ sort: 'created:asc', per_page: 15 });
        const response = await fetch(`${Github_URL}/users/${login}/repos?${sortParams}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()

        dispatch({ type: 'GET_REPOS', payload: data })
    }

    // set loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    // clear users from state 
    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    return <githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
        {children}
    </githubContext.Provider>

}

export default githubContext;