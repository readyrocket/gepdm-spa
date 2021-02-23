/* eslint-disable no-nested-ternary */
import React from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./styles";

interface Props {
  hasOpeningBar: {
    className: string,
  };
  ShowSignInModal: () => void;
  ShowSignUpModal: () => void;
}

const NavigationBar: React.FC<Props> = (props) => {
	const hasClassName = props?.hasOpeningBar?.className;

	const { ShowSignInModal, ShowSignUpModal } = Object(props);

	const that = {
		disabled: `disabled`,
		active: `m-navbar__active`,
		inactive: `m-navbar__inactive`,
	};

	const isDisabled = hasClassName === ``;
	const hasActive = hasClassName === that.inactive ? that.active : that.inactive;

	return (
		<NavBar.with.NavigationContainer>

			<NavBar.with.NavigationBar
				className={`${isDisabled ? that.disabled : hasActive }`}
			>
				<Link to="/entregador" className="s-navlink">
					Entregador
				</Link>
				<NavBar.with.Divider />
				<Link to="/sobre" className="s-navlink">
					Sobre
				</Link>
				<NavBar.with.Divider />
				<Link to="/contato" className="s-navlink">
					Contato
				</Link>
				<NavBar.with.Divider />

				<NavBar.with.GetInApplication>
					<button
						type="button"
						title="Login button on the navigation bar"
						name="button signup"
						className="s-signin"
						onClick={ShowSignInModal}
					>
						Login
					</button>

					<button
						type="button"
						title="subscribe button on the navigation bar"
						name="button signup"
						className="s-signup"
						onClick={ShowSignUpModal}
					>
						Cadastro
					</button>
				</NavBar.with.GetInApplication>

			</NavBar.with.NavigationBar>

		</NavBar.with.NavigationContainer>
	);
};

export { NavigationBar };
