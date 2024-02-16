const Breamcums = ({children, title}) => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white">
            <div>
                <button class="bg-indigo-500 text-white rounded-md px-3 hover:bg-indigo-600 focus:ring-4">Back</button>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-1">{children}</div>
        </div>
    )
}

export default Breamcums;