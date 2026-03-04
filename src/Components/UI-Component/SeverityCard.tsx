import {MdError, MdWarning, MdReport, MdCheckCircle} from  "react-icons/md"


type SeverityType = "critical" | "high" | "medium" | "low"


interface SeverityCardProps{
    title: string,
    count:number,
    changeText: string,
    severity: SeverityType,
    isPositive?: boolean
}

function SeverityCard({
    title,
    count,
    changeText,
    severity,
    isPositive = false}:SeverityCardProps) {
    const severityColorMap = {
        critical: "var(--critical)",
        high: "var(--high)",
        medium: "var(--medium)",
        low: "var(--low)"
    }

    const severityIconMap={
        critical:<MdError/>,
        high: <MdWarning/>,
        medium:<MdReport/>,
        low:<MdCheckCircle/>

    }

const color = severityColorMap[severity]

    return(
       <div className="severity-card" >

        <div className="severity-header">
            <p  className="severity-title">{title}</p>
            <span className="serverity-icon" style={{color}}>
                {severityIconMap[severity]}
            </span>

        </div>
<div className="card-bottom">
        <p className="severity-count" style={{color}}>{count}</p>
<p className="severity-change" style={{color:isPositive ? "var(--low)" : "var(--critical)"}}>
    {changeText}
</p> 
</div>
       </div>
    )
}

export default SeverityCard