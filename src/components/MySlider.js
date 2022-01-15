export default function MySlider({
    label,
    labelClassName,
    rangeClassName,
    value,
    minValue,
    maxValue,
    onchange,
    stepBy,
    ...props
}){
    return(<>
    
    <div style={{display:"flex", justifyContent:"space-between", padding:"0rem 1rem"}}>
        <label className={labelClassName} 
        htmlFor={`custom_slider_${label.replace(" ", "_")}`}>{label}</label>
        <input id={label.replace(" ", "_")} 
        className={rangeClassName} 
        type="range"
        value={value}
        min={minValue}
        max={maxValue} 
        step={stepBy}
        onChange={onchange}
         />
    </div>
    </>)
}