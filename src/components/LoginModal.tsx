import useLoginModal from '../hooks/useLoginModal'
import Button from './Button'
import Modal from './Modal'

const LoginModal = () => {
    const { onClose, isOpen } = useLoginModal()

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    // TODO: add fetch('/login') once backend implemented

    return (
        <Modal
            isOpen={isOpen}
            onChange={onChange}
            className="bg-pink-950 py-16 lg:max-w-[800px] lg:p-16"
            style={{ backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,.4),#282828 90%)' }}
        >
            <div className="flex h-full flex-col items-center justify-center lg:flex-row">
                <div className="min-h-[200px] min-w-[200px] max-w-[50%] sm:min-h-[240px] sm:min-w-[240px] lg:mr-16">
                    <img
                        src="src/assets/images/liked.png"
                        className=" rounded-lg object-cover"
                    />
                </div>
                <div className="mt-8 flex flex-col items-center lg:mt-0">
                    <h2 className="max-w-[350px] text-center text-2xl font-bold">
                        Start listening with your Spotify account
                    </h2>
                    <Button
                        onClick={() => {}}
                        className="mt-8 w-[200px] px-12"
                    >
                        Log in
                    </Button>
                    <a
                        className="
                            mt-4
                            w-[200px]
                            whitespace-nowrap
                            rounded-full
                            border
                            border-neutral-500
                            px-12
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:opacity-75
                            active:scale-95
                        "
                        href="https://spotify.com/download"
                        rel="noreferrer"
                    >
                        Download app
                    </a>

                    <p className="mt-8 text-center">
                        <span className="text-neutral-400">Don't have an account?</span>
                        <a
                            href="https://spotify.com/signup"
                            rel="noreferrer"
                            className="ml-2 font-bold"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default LoginModal