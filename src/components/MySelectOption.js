export default function MySelectOption({
    name,
    label,
    labelClassName,
    selectClassName,
    onchange,
    arrayOfData,
    defaultValue,
    ...props
}){

    let options = arrayOfData.map((data, i)=>
    <option
    key={i}
    value={data}
    >{data}</option>
    )
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", padding:"0rem 1rem"}}>
        <label className={labelClassName} 
        htmlFor={`custom_select_${label.replace(" ", "_")}`}>{label}</label>
            <select style={{textTransform:"capitalize"}} name={name} 
            className={selectClassName} 
            onChange={onchange}>
                <option>{defaultValue}</option>
                {options}
           </select>
        </div>
        </>
    )
}