import type {ReactNode} from "react"

type Props = {
    children: ReactNode;
}

const FormItem = ({children}:Props)=>{
    return <div className="flex flex-col gap-1">
        {children}
    </div>
}

export default FormItem;