import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'


function Alert() {

    const { alert } = useContext(AlertContext);

    return alert !== null && (
        <p className="flex items-start mb-2 space-x-2">
            {
                alert.type === 'error' && (
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v4a1 1 0 11-2 0v-4zm1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                )
            }
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
}

export default Alert