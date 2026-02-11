import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
export function CreateRoom() {
	const {} = useQuery({
		queryKey: [""],
	});

	return (
		<div>
			<div>Create Room</div>
			<Link to="/room">Acessar sala</Link>
		</div>
	);
}
