/* eslint-disable camelcase */
import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { showToastfy } from '../../components/Toastfy';
import { ToastfyContainer } from '../../components/Toastfy/styles';
import { api } from '../../services/api';
import { DEFAULT_ERROR, SUCCESS_SIGNUP } from '../../utils/request.message';
import { SignUpSchema } from './signup.validations';
import { Screen } from './styles';

type User = {
  name: string,
  email: string,
  password: string,
  confirmedPassword: string,
  privacy_policy: boolean,
};

const SignUpScreen: React.FC<any> = ({ visible, handleCancel }) => {

	const defaultValues = {
		name: ``,
		password: ``,
		email: ``,
		repeat_password: ``,
		privacy_policy: false,
	};

	const { register, errors, handleSubmit, reset } = useForm({
		resolver: yupResolver(SignUpSchema),
		defaultValues
	});

	const handleUserSignUp = useMemo(
		() => async (userData: User) => {
			try {
				const { name, email, password, privacy_policy } = userData;

				const response = await api.post(`/register`, {
					name,
					email,
					password,
					privacy_policy
				});

				if (response.status === 201) {
					showToastfy(SUCCESS_SIGNUP).sucess();
					reset();
				}
			} catch (err) {
				const { response } = Object(err);

				if (response?.status === 401) {
					showToastfy(`${response?.data?.message}`).error();
					return;
				}
				showToastfy(DEFAULT_ERROR).warning();
			}
		},
		[reset]
	);

	const closeToast = () => showToastfy().dimmiss();

	return (
		<Modal
			visible={visible}
			onCancel={() => [handleCancel(), closeToast()]}
			footer={null}
			centered
		>

			<ToastfyContainer />

			<Screen.layout.Base>

				<Screen.layout.Header>
					<Screen.with.Title>Cadastro</Screen.with.Title>
					<Screen.with.Description>Faça sua conta aqui.</Screen.with.Description>
				</Screen.layout.Header>

				<Screen.layout.Content>

					<Screen.with.Form onSubmit={handleSubmit(handleUserSignUp)}>

						<Screen.with.InputContainer>
							<Screen.with.FormLabel>Nome completo</Screen.with.FormLabel>
							<Screen.with.FormInput
								placeholder="Seu Nome"
								name="name"
								id="name"
								ref={register}
							/>
							{errors.name && (
								<Screen.with.ErrorMessage>
									{errors?.name?.message}
								</Screen.with.ErrorMessage>
							)}
						</Screen.with.InputContainer>

						<Screen.with.InputContainer>
							<Screen.with.FormLabel>Email</Screen.with.FormLabel>
							<Screen.with.FormInput
								placeholder="seu_email@mail.com"
								name="email"
								id="email"
								autoComplete="email"
								ref={register}
							/>
							{errors.email && (
								<Screen.with.ErrorMessage>
									{errors.email?.message}
								</Screen.with.ErrorMessage>
							)}
						</Screen.with.InputContainer>

						<Screen.with.InputContainer>
							<Screen.with.FormLabel>Senha</Screen.with.FormLabel>
							<Screen.with.FormInput
								placeholder="********"
								name="password"
								type="password"
								id="password"
								autoComplete="new-password"
								ref={register}
							/>
							{errors?.password && (
								<Screen.with.ErrorMessage>
									{errors.password?.message}
								</Screen.with.ErrorMessage>
							)}
						</Screen.with.InputContainer>

						<Screen.with.InputContainer>
							<Screen.with.FormLabel>
								Confirmar senha
							</Screen.with.FormLabel>
							<Screen.with.FormInput
								placeholder="********"
								name="repeat_password"
								id="confirm_password"
								type="password"
								autoComplete="new-password"
								ref={register}
							/>
							{errors.repeat_password && (
								<Screen.with.ErrorMessage>
									{errors.repeat_password?.message}
								</Screen.with.ErrorMessage>
							)}
						</Screen.with.InputContainer>

						<Screen.with.PrivacyTerms>
							<Screen.with.Input
								ref={register}
								type="checkbox" name="privacy_policy"
							/>
							<h4 className="s-description">Eu concordo com os
								<Link to="/home" className="s-privacy__link">termos de privacidade.</Link>
							</h4>
							{errors.privacy_policy && (
								<Screen.with.PrivacyError>
									{errors.privacy_policy?.message}
								</Screen.with.PrivacyError>
							)}
						</Screen.with.PrivacyTerms>

						<Screen.with.ButtonContainer>
							<Screen.with.FormButton type="submit">
								<span>Cadastrar</span>
							</Screen.with.FormButton>
						</Screen.with.ButtonContainer>

					</Screen.with.Form>

				</Screen.layout.Content>

			</Screen.layout.Base>

		</Modal>
	);
};

export { SignUpScreen };
