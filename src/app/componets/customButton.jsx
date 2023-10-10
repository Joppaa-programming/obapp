

export default function CustomButton({text,color,textcolor}) {
    return (<div className={`my-2 border-2 px-6 py-2 ${color} ${textcolor} rounded-2xl`} >
        <div className="text-base font-bold">{text}</div>
    </div>)
}
