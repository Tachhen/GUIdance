interface ButtonProps{
    children: React.ReactNode
    type?: "button" | "submit" | "reset"
}

function Button({children,type="button"}:ButtonProps){
    return(
        <button
      type={type}
      className="w-full rounded-lg bg-blue-600 py-3
                 font-semibold text-white
                 transition hover:bg-blue-700"
        >
            {children}
        </button>
    )
}
export default Button