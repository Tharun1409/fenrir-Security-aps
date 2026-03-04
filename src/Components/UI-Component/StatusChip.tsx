interface statusChipProps {
    Status:  "completed" | "scheduled" | "failed"
}

function StatusChip({Status}: statusChipProps){

    return(
        <span className={`status-chip ${Status}`}>
            {Status}
        </span>
    )
}
export default StatusChip