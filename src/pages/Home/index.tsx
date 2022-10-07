import { StyledBody, StyledHeader, StyledMenu, StyledNav, StyledPosts } from "./styles";
import { useNavigate } from "react-router-dom";
import imgLogout from "../../assets/logout.png";
import { useState } from "react";
import Profile from "../../components/Profile";
import Chaser from "../../components/Chaser";
import Chasing from "../../components/Chasing";
import { useAuth } from "../../contexts/auth";

declare type TypedSection = "profile" | "chaser" | "chasing";

const Home = (): JSX.Element => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const [section, setSection] = useState<TypedSection>("profile");

	return (
		<>
			<StyledBody>
				<StyledMenu>
					<StyledHeader>
						<h1
							onClick={() => {
								navigate("/home");
							}}
						>
							H.
						</h1>

						<input
							type="text"
							name="search"
							id="search"
							placeholder="Pesquisar pessoas no hate u."
						/>

						<img
							onClick={() => logout()}
							src={imgLogout}
							alt="menu"
						/>
					</StyledHeader>

					<StyledNav active={section}>
						<p
							id="profile"
							onClick={() => setSection("profile")}
						>
							Perfil
						</p>
						<p
							id="chaser"
							onClick={() => setSection("chaser")}
						>
							Seguidores
						</p>
						<p
							id="chasing"
							onClick={() => setSection("chasing")}
						>
							Seguindo
						</p>
					</StyledNav>

					{section === "profile" ? <Profile></Profile> : section === "chaser" ? <Chaser></Chaser> : <Chasing></Chasing>}
				</StyledMenu>
				<StyledPosts>
					<h1> UNDER BUILDING</h1>
				</StyledPosts>
			</StyledBody>
		</>
	);
};

export default Home;
