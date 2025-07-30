type Props = {
    type?: string;
    placeholder?: string;
    value?: string;
    id?: string;
}

const Input = ({type, placeholder, value, id}:Props) => {
    return <input type={type? type: "text"} placeholder={placeholder} value={value} id={id} className="bg-gray-200 rounded-[8px] h-10 px-1.5" />
}

export default Input;