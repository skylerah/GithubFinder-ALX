import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


function UserSearch() {
    const [text, setText] = useState('');
    const { users, searchUsers, clearUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            setAlert('Please enter something', 'error');
        } else {
            searchUsers(text);
        }
    }


    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button type="submit" className='absolute right-0 top-0 rounded-l-none btn btn-lg w-36'>Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {
                users?.length > 0 && (
                    <div>
                        <button className='btn btn-ghost btn-lg' onClick={clearUsers}>Clear</button>
                    </div>
                )
            }

        </div>
    )
}

export default UserSearch