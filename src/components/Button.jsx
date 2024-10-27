const Button = ({style, text, onclick}) => {
    return(
        <button
            className={`px-3 py-2 ml-1 rounded text-white ${style}`} 
            onClick={onclick}>
            {text}
            </button>
    )
}

export default Button;