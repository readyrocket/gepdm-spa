/* eslint-disable jsx-a11y/alt-text */
import 'antd/dist/antd.css';

import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../../assets/undraw_Hamburger_8ge6.svg';
import { SignInScreen } from '../SignIn';
import { SignUpScreen } from '../SignUp';
import { CloseButton } from './assets/CloseButton';
import { OpenButton } from './assets/OpenButton';
import { ButtonSignUp } from './components/ButtonSignUp';
import { NavigationBar } from './components/NavigationBar';
import { Screen } from './styles';
import { ButtonNavBar } from './types/ButtonNavBar';
import { NavBarClassName } from './types/NavBarClassName';

function Landing() {
	const [openButton, setOpenButton] = useState<ButtonNavBar>({ className: `open` });
	const [openNavBar, setOpenNavBar] = useState<NavBarClassName>({ className: `` });

	// SignIn
	const [isVisibleSignInModal, setVisibleSignInModal] = useState(false);

	const handleShowSignInModal = useCallback(() => {
		setVisibleSignInModal((state) => !state);
	}, []);

	const handleCancelSignInModal = useCallback(() => {
		setVisibleSignInModal((state) => !state);
	}, []);

	// SignUp
	const [isVisibleSignUpModal, setVisibleSignUpModal] = useState(false);

	const handleShowSignUpModal = useCallback(() => {
		setVisibleSignUpModal(state => !state);
	}, []);

	const handleCancelSignUpModal = useCallback(() => {
		setVisibleSignUpModal((state) => !state);
	}, []);

	const checkNavigationBar = () => ({
		hasOpeningButton: () => (
			openButton.className === `open` ?
				setOpenButton({ className: `close` })
				: setOpenButton({ className: `open` })
		),
		hasOpeningNavBar: () => (
			openNavBar.className === `m-navbar__inactive` ?
				setOpenNavBar({ className: `m-navbar__active` })
				: setOpenNavBar({ className: `m-navbar__inactive` })
		)
	});

	const handleNavationBar = () => {
		checkNavigationBar().hasOpeningButton();
		checkNavigationBar().hasOpeningNavBar();
	};

	return (
		<Screen.layout.Base>
			<Screen.layout.Header>
				<Screen.with.Title>Deliverfy</Screen.with.Title>

				<Screen.with.TopNavBar>
					<Link to="/entregador" className="s-navlink">
						Entregador
					</Link>
					<Link to="/sobre" className="s-navlink">
						Sobre
					</Link>
					<Link to="/contato" className="s-navlink">
						Contato
					</Link>
				</Screen.with.TopNavBar>

				<Screen.with.GetInApplication>
					<Screen.with.SignInButton
						type="button"
						onClick={handleShowSignInModal}
					>
						Login
					</Screen.with.SignInButton>

					<ButtonSignUp
						onClick={handleShowSignUpModal}
						type="button"
					>
						Cadastro
					</ButtonSignUp>

					<SignInScreen
						visible={isVisibleSignInModal}
						handleCancel={handleCancelSignInModal}
					/>
					<SignUpScreen
						visible={isVisibleSignUpModal}
						handleCancel={handleCancelSignUpModal}
					/>
				</Screen.with.GetInApplication>

				<Screen.with.SmallMenu
					type="button"
					name="button navigation"
					title="button navigation"
					className="s-menu-btn s-mobile-bar"
					onClick={handleNavationBar}
				>
					<OpenButton openButtonBar={openButton} />
					<CloseButton closeButtonBar={openButton} />
				</Screen.with.SmallMenu>

			</Screen.layout.Header>

			<NavigationBar
				hasOpeningBar={openNavBar}
				ShowSignInModal={handleShowSignInModal}
				ShowSignUpModal={handleShowSignUpModal}
			/>

			<Screen.layout.Content>
				<Screen.with.Welcome>

					<Screen.with.WelcomeTitle>Encontre sua {` `}
						<span className="bold">
							comida preferida{` `}
						</span> pelo {` `}
						<span className="bold">Deliverfy</span>
					</Screen.with.WelcomeTitle>

					<Screen.with.WelcomeDescription>
						É rápido, simples e prático
					</Screen.with.WelcomeDescription>

					<ButtonSignUp
						onClick={handleShowSignUpModal}
						type="button"
						className="secondary"
					>
						COMEÇAR
					</ButtonSignUp>

				</Screen.with.Welcome>

				<Screen.with.WelcomeImage>
					<Screen.with.Hamburger>
						<img alt="hamburguer" loading="lazy" src={Hamburger} />
					</Screen.with.Hamburger>
				</Screen.with.WelcomeImage>

			</Screen.layout.Content>

		</Screen.layout.Base>
	);
}

export { Landing as default };
