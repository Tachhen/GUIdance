interface InputProps{
    id: string 
    label: string
    type: string
    placeholder: string
}

function Input({id ,label, type , placeholder}:InputProps){
    return(
        <div className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className="text-sm fonttext-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <input 
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5
                   outline-none transition
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    )
}
export default Input