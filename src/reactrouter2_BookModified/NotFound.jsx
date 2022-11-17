import { useNavigate } from "react-router-dom";
import './SecondRouter.css';

function NotFound() {
    const navigate = useNavigate();

    setTimeout(() => {navigate("/");}, 1000);

    return (
        <div className="error">NotFound 페이지입니다.</div>
    )
}

export default NotFound;