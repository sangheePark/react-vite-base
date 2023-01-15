import { useNavigate } from "react-router-dom";
import "./index.less";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div>404 화면</div>
	);
};

export default NotFound;
