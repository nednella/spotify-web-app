import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import Logout from '../../api/auth/Logout'

import Popup from './Popup'
import useAccountPopup from '../../hooks/useAccountPopup'

const AccountPopup = () => {
    const { isOpen, onClose } = useAccountPopup()
    const navigate = useNavigate()

    const handleAccount = () => {
        navigate('/account')
        onClose()
    }

    const handleLogout = () => {
        Logout()
            .then(() => {
                window.location.reload()
                navigate('/')
            })
            .catch((error) => {
                toast.error(error.message)
                return navigate('/')
            })
    }

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Popup
            isOpen={isOpen}
            onChange={onChange}
            className="
                absolute
                right-6
                top-[70px]
                z-30
                h-fit
                max-h-full
                w-[180px]
                rounded-sm
                bg-neutral-800
                p-1
                shadow-xl
                transition
            "
        >
            <ul>
                <li
                    className="
                        flex
                        h-10
                        w-full
                        cursor-pointer
                        rounded-t-sm
                        pl-3
                        hover:bg-neutral-700
                    "
                    onClick={handleAccount}
                >
                    <button className="text-sm font-semibold text-neutral-200">Account</button>
                </li>
                <li
                    className="
                        flex
                        h-10
                        w-full
                        cursor-pointer
                        rounded-b-sm
                        border-t
                        border-neutral-600
                        pl-3
                        hover:bg-neutral-700
                    "
                    onClick={handleLogout}
                >
                    <button className="text-sm font-semibold text-neutral-200">Log out</button>
                </li>
            </ul>
        </Popup>
    )
}

export default AccountPopup
