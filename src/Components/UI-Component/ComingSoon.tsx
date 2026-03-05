import "./ComingSoon.css";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  message?: string;
};

export default function ComingSoon({
  title = "Coming Soon",
  message = "This feature is currently under development.",
}: Props) {

const navigate = useNavigate();

  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-card">
        <h2>{title}</h2>
        <p>{message}</p>

        <button className="back-dashboard-btn" onClick={()=>navigate("/dashboard")}>
            ← Back to Dashboard

        </button>
      </div>
    </div>
  );
}