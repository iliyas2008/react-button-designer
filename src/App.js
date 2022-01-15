import { useEffect, useState } from 'react';
import MyColorPicker from './components/MyColorPicker'
import './App.css';
import MySelectOption from './components/MySelectOption';
import MySlider from './components/MySlider';

function App() {
  const appName = "React Button Designer"
  const [bgColor, setBgColor] = useState("#2568C1")
  const [btnWidth, setBtnWidth] = useState("90")
  const [btnHeight, setBtnHeight] = useState("25")
  const [borderWidth, setBorderWidth] = useState("2")
  const [borderRadius, setBorderRadius] = useState("2")
  const [borderColor, setBorderColor] = useState("#F50000")
  const [txtColor, setTxtColor] = useState("#FFFFFF")
  const [txtDecorationColor, setTxtDecorationColor] = useState("#F50000")
  const [txtDecoration, setTxtDecoration] = useState("line-through")
  const [txtAlign, setTxtAlign] = useState("center")
  const [txtSize, setTxtSize] = useState("16")
  const [copySuccess, setCopySuccess] =useState("")
  
  const txtDecorationArr = ["none", 
  "overline solid", "overline wavy", "overline double", 
  "line-through solid", "line-through wavy", "line-through double", 
  "underline solid", "underline wavy", "underline double", 
  "overline underline solid", "overline underline wavy", "overline underline double"]
  const textAlignArr = ["left", "right", "center"]
  const [btnCSSArr, setBtnCSSArr] = useState([])
  const [CSSBool, setCSSBool] = useState(false)
  
  // get css from element starts
  const myBtnProperties = ["background-color", "color", "text-decoration", "text-align", "font-size", "width", "height", "border-width", "border-color", "border-radius"]

  useEffect(()=>{
    let myBtnCss = getComputedStyle(document.getElementById("myBtn"), null);
    setBtnCSSArr(CSSObjToConvertedArr(myBtnCss))

  }, [setBtnCSSArr, bgColor, btnWidth, btnHeight, borderWidth, borderRadius, borderColor, txtColor, txtDecorationColor, txtDecoration, txtAlign, txtSize])

  function CSSObjToConvertedArr(obj){
    let myArr = []
    Object.entries(obj).map(([k,v])=>{
      if(v!==""){
        myBtnProperties.filter((data)=>{
          if(k.replace(/[A-Z]/g, m => "-" + m.toLowerCase())===data){
            myArr = [...myArr, `${k}:${v}`.replace(/[A-Z]/g, m => "-" + m.toLowerCase())]
            // console.log(`${k}:${v}`.replace(/[A-Z]/g, m => "-" + m.toLowerCase()))
          }
        })
      }
    })
    return myArr;
  }
  // get css from element ends
/*
// get rgb array from rgb property starts
function rgbArr(string){
return string.substring(4, string.length-1).replace(/ /g, '').split(',');
// console.log(rgbArr);
}

// get rgb array from rgb property ends

  // RGB to Hex start
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  // RGB to Hex end

*/
  const handleBgColor=(e)=>{
    setBgColor(e.target.value)
  }
  const handletxtColor=(e)=>{
    setTxtColor(e.target.value)
  }

  const handleDecoration = (e)=>{
    setTxtDecoration(e.target.value)
  }

  const handleTxtDecorationColor = (e)=>{
    setTxtDecorationColor(e.target.value)
  }
  const handleTxtAlign = (e)=>{
    setTxtAlign(e.target.value)
  }
  const handleTxtSize = (e)=>{
    setTxtSize(e.target.value)
  }
  const handleBtnWidth = (e)=>{
    setBtnWidth(e.target.value)
  }
  const handleBtnHeight = (e)=>{
    setBtnHeight(e.target.value)
  }
  const handleBorderWidth = (e)=>{
    setBorderWidth(e.target.value)
  }
  const handleBorderRadius = (e)=>{
    setBorderRadius(e.target.value)
  }
  const handleBorderColor = (e)=>{
    setBorderColor(e.target.value)
  }

  const handleCSSGenerate = ()=>{
      setCSSBool(CSSBool? false : true)
  }

  const handleCSSCopy = ()=>{
    let copiedTxt = document.querySelector(".cssBlock").innerHTML.replace(/(<([^>]+)>)/gi, "\n\t")
    navigator.clipboard.writeText(".myCustomBtn {"+ copiedTxt + "}")  
    const alert = document.querySelector('#myalert')
    alert.style=`display:block; color:greenyellow; text-align:center;`
    setTimeout(function(){ 
      alert.style=`display:none`
  }, 2000);
    
    setCopySuccess("CSS Copied !")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <p>Refer github <a style={{textDecoration:"none", 
        color:"lightseagreen", fontWeight:"700"}} 
        
        href="https://github.com/iliyas2008/react-button-designer" rel="noreferrer" target="_blank">Repo</a></p>
      </header>
      <section className="App-body">
        <div className="left">
          <div className="inner">
            <div className="left-top">
              <MyColorPicker
              label={"Background Color"}
              labelClassName={"custom-label"}
              value={bgColor}
              onchange={handleBgColor}
              />
              <MyColorPicker
              label={"Text Color"}
              labelClassName={"custom-label"}
              value={txtColor}
              onchange={handletxtColor}
              />

              <MySelectOption
              name={"txtDecoration"}
              label={"Text Decoration"} 
              labelClassName={"custom-label"}
              arrayOfData={txtDecorationArr}
              defaultValue={"Select Decoration"}
              onchange={handleDecoration}
              />
              <MyColorPicker
              label={"Text Decoration Color"}
              labelClassName={"custom-label"}
              value={txtDecorationColor}
              onchange={handleTxtDecorationColor}
              />
              <MySelectOption
              name={"txtAlign"}
              label={"Text Align"} 
              labelClassName={"custom-label"}
              arrayOfData={textAlignArr}
              defaultValue={"Select Align"}
              onchange={handleTxtAlign}
              />
              <MySlider
              label={"Text Size"}
              labelClassName={"custom-label"}
              value={txtSize}
              minValue={"1"}
              maxValue={"100"}
              stepBy={"1"}
              onchange={handleTxtSize}
              />
              
              <MySlider
              label={"Button Width"}
              labelClassName={"custom-label"}
              value={btnWidth}
              minValue={"1"}
              maxValue={"450"}
              stepBy={"1"}
              onchange={handleBtnWidth}
              />
              <MySlider
              label={"Button Height"}
              labelClassName={"custom-label"}
              value={btnHeight}
              minValue={"1"}
              maxValue={"450"}
              stepBy={"1"}
              onchange={handleBtnHeight}
              />
              <MySlider
              label={"Border Width"}
              labelClassName={"custom-label"}
              value={borderWidth}
              minValue={"0"}
              maxValue={"50"}
              stepBy={"1"}
              onchange={handleBorderWidth}
              />
              <MyColorPicker
              label={"Border Color"}
              labelClassName={"custom-label"}
              value={borderColor}
              onchange={handleBorderColor}
              />

              <MySlider
              label={"Border Radius"}
              labelClassName={"custom-label"}
              value={borderRadius}
              minValue={"0"}
              maxValue={"100"}
              stepBy={"1"}
              onchange={handleBorderRadius}
              />
            </div>
            <div style={{width:"100%"}}  className="left-bottom">
            </div>
          </div>
        </div>
        <div className="right">
           <div className="inner">
              <div style={{width:"50%"}}  className="right-top">
                <button id="myBtn" 
                style={{
                  background:`${bgColor}`,
                  color:`${txtColor}`,
                  textDecoration:`${txtDecoration} ${txtDecorationColor}`,
                  textAlign:`${txtAlign}`,
                  fontSize:`${txtSize}px`,
                  width:`${btnWidth}px`,
                  height:`${btnHeight}px`,
                  borderWidth:`${borderWidth}px`,
                  borderColor:`${borderColor}`,
                  borderRadius:`${borderRadius}px`,
                  }} >My Button</button>
              
              <button onClick={handleCSSGenerate} className='btnCreateCSS'>Toggle CSS</button>
                
              </div>
              <div style={{width:"100%"}}  className="right-bottom">
                <p id='myalert'>{copySuccess}</p>
                <div 
                style={CSSBool? {display:"block"} : {display:"none"}} 
                className='cssBlock tooltip'
                onClick={handleCSSCopy}
                >
                  <span class="tooltiptext">Click to copy !</span>
                    {btnCSSArr.map((el, i)=>{
                      return(
                        <>
                        <p key={i+"css_props"} className='myCSSProps'>{el+";"}</p>
                        </>
                      )
                    })}
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
