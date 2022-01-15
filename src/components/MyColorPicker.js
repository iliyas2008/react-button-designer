export default function MyColorPicker({
    label,
    inputClassName,
    labelClassName,
    value,
    onchange,
    ...props
}){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", padding:"0rem 1rem"}}>
            <label className={labelClassName} htmlFor={`picker_${label.replace(" ", "_")}`}>{label}</label>
            <input  type="color" 
            className={inputClassName} 
            value={value} 
            onChange={onchange} />
        </div>
        </>
    )
}
