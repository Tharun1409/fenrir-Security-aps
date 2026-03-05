import SeverityCard from "../../Components/UI-Component/SeverityCard"
import { scans } from "../../data/Scans"
import StatusChip from "../../Components/UI-Component/StatusChip"
import VulnerabilityBadges from "../../Components/UI-Component/VulnerabilityCountGroup"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const ITEMS_PER_PAGE = 9;

function Dashboard() {

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState<"All" | "completed" | "scheduled" | "failed">("All");



    const filteredScans = scans.filter((scan) => {
  const matchesSearch = scan.name.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ? true : scan.status === statusFilter;

  return matchesSearch && matchesStatus;
});
    const totalPages = Math.max(1, Math.ceil(filteredScans.length / ITEMS_PER_PAGE));

    const statrtIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentScans = filteredScans.slice(statrtIndex, statrtIndex + ITEMS_PER_PAGE);









    const navigate = useNavigate()
    return (
        <div>


            <div className="org-stats">
                <div className="org-items">
                    <div className="org-item"><span>Org:</span> <strong>Project X</strong> |</div>
                    <div className="org-sep" />
                    <div className="org-item"><span>Owner:</span> <strong>Nammagiri</strong>|</div>
                    <div className="org-sep" />
                    <div className="org-item"><span>Total Scans:</span> <strong>100</strong>|</div>
                    <div className="org-sep" />
                    <div className="org-item"><span>Scheduled:</span> <strong>1000</strong>|</div>
                    <div className="org-sep" />
                    <div className="org-item"><span>Rescans:</span> <strong>100</strong>|</div>
                    <div className="org-sep" />
                    <div className="org-item"><span>Failed Scans:</span> <strong>100</strong></div>
                </div>
                <div className="org-time">
                    <span className="org-time-dot" />
                    <span>10 mins ago</span>
                </div>
            </div>

            <div className="severity-grid">
                <SeverityCard
                    title="Critical Severity"
                    count={86}
                    changeText="+2 increase than yesterday"
                    severity="critical"
                    isPositive={false}
                />


                <SeverityCard
                    title="High Severity"
                    count={16}
                    changeText="+0.9% increase than yesterday"
                    severity="high"
                    isPositive={false}
                />

                <SeverityCard
                    title="Medium Severity"
                    count={26}
                    changeText="+0.9% decrease than yesterday"
                    severity="medium"
                    isPositive={true}
                />

                <SeverityCard
                    title="Low Severity"
                    count={16}
                    changeText="+0.9% increase than yesterday"
                    severity="low"
                    isPositive={false}
                />

            </div>
            <div className="toolbar">
                <input
                    type="text"
                    value={search}
                    onChange={
                        (e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }
                    }
                    placeholder="search scans.."
                    className="search-input" />

                <div className="toolbar-actions">

                    <select
                        className="btn secondary"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value as any)}
                    >
                        <option value="All">Filter</option>
                        <option value="completed">Completed</option>
                        <option value="failed">Failed</option>
                        <option value="scheduled">Scheduled</option>
                    </select>

                    <button className="btn secondary">Column</button>
                    <button onClick={() => alert("New Scan Started")}>
                        + New Scan
                    </button>

                </div>

            </div>

            <div className="table-container">
                <table className="scan-table">
                    <thead>
                        <tr>
                            <th>Scan Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Vulnerability</th>
                            <th>Last Scan</th>

                        </tr>
                    </thead>

                    <tbody>
                        {currentScans.map(scan => (
                            <tr key={scan.id}
                                onClick={() => navigate(`/scan/${scan.id}`)}
                                className="clickable-row">
                                <td>{scan.name}</td>
                                <td>{scan.type}</td>
                                <td>
                                    <StatusChip Status={scan.status as "completed" | "scheduled" | "failed"} />
                                </td>
                                <td>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${scan.progress}%` }} />

                                    </div>
                                    {scan.progress}%
                                </td>
                                <td >
                                    <VulnerabilityBadges data={scan.vulnerabilities} />
                                </td>
                                <td>{scan.lastScan}</td>


                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="pagination">

                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            className={currentPage === page ? "active-page" : ""}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

            </div>

        </div>
    )
}
export default Dashboard