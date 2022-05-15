import styled from 'styled-components';

export const H1 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 46px;
	/* or 128% */

	/* primary */

	color: #425c56;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;
export const H2 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	line-height: 16px;
	/* or 128% */

	/* primary */

	color: #425c56;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;

export const P1 = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}
`;

export const P2 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 36px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}

	margin-bottom: 15px;
`;
