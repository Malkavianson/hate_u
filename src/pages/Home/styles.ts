import styled, { css, Interpolation } from "styled-components";

interface StyledProps {
	active: string;
}

export const StyledBody = styled.section`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
`;

export const StyledMenu = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 450px;
	background-color: rgba(0, 0, 0, 0.3);

	div {
		display: flex;
	}
`;

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 8vh;
	padding: 16px;
	background-color: rgba(23, 113, 16, 1);

	h1 {
		font-size: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgba(255, 255, 255, 0.8);
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.6);
		width: 40px;
		height: 40px;
		border-radius: 20px;
	}

	input {
		height: 34px;
		padding: 8px 8px 8px 12px;
		width: 75%;
		max-width: 250px;
		outline: 0;
		border: none;
		border-radius: 24px;
		background-color: rgba(255, 255, 255, 0.3);
		font-size: 14px;

		::placeholder {
			color: rgba(0, 0, 0, 1);
		}
	}

	img {
		width: 24px;
		cursor: pointer;
		transition: 0.3s ease;

		:hover {
			transform: scale(1.1);
		}
	}
`;

export const StyledNav = styled.article<StyledProps>`
	width: 100%;
	height: 38px;
	background-color: rgba(23, 113, 16, 0.5);
	display: flex;

	p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		cursor: pointer;

		:hover {
			border-bottom: 5px solid rgba(23, 113, 16, 1);
		}
	}

	${({ active }): Interpolation<StyledProps> => {
		return css`
			p#${active} {
				border-bottom: 5px solid rgba(23, 113, 16, 0.9);
			}
		`;
	}}
`;

export const StyledPosts = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;

	h1 {
		margin-top: 12px;
		font-size: 48px;
	}
`;
