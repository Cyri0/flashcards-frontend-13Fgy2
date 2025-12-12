const ProgressBar = ({current,max}:{current: number, max:number}) => {
  return (
    <div>
        <h3>{current} / {max}</h3>
        <div className="progressBar">
            <div
            style={{width: current/(max / 100) + "%"}}
            ></div>
        </div>
    </div>
  )
}

export default ProgressBar