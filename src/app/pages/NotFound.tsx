import Header from '../../components/Header'

const NotFound = () => {
    return (
        <>
            <Header className="bg-none" />
            <div className="flex flex-grow flex-col items-center justify-center">
                <img src="/public/spotify-icon.svg" />
                <h1 className="mt-8 text-5xl font-bold">Page not found</h1>
                <p className="mt-2 text-neutral-400">
                    We can't seem to find the page you are looking for.
                </p>
            </div>
        </>
    )
}

export default NotFound