/* eslint-disable indent */
import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { showToastfy } from '../../components/Toastfy';
import { ToastfyContainer } from '../../components/Toastfy/styles';
import { useAuthContext } from '../../context/auth/useAuthContext';
import { DEFAULT_ERROR } from '../../utils/request.message';
import { SignUpScreen } from '../SignUp';
import { SignInSchema } from './signin.validations';
import { Screen } from './styles';

const SignInScreen: React.FC<any> = ({ visible, handleCancel }) => {
  const { SignIn } = useAuthContext();
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const [showModalSignIn, setShowModalSignIn] = useState(false);

  const handleShowModalSigIn = () => {
    setShowModalSignIn((state) => !state);
  };

  const handleCancelModalSigIn = () => {
    showToastfy().dimmiss();
    setShowModalSignIn(false);
  };

  const history = useHistory();

  const handleFormSubmit = useMemo(
    () => async (data: { email: string, password: string }) => {
      try {
        showToastfy().dimmiss();

        const { email, password } = Object(data);

        const response = await SignIn(email, password);

        if (response.status === 202) {
          history.replace(`/home`);
          return;
        }
      } catch (err) {
        const { response } = Object(err);

        if (response?.status === 401) {
          showToastfy(response?.data?.message).error();
          return;
        }
        showToastfy(DEFAULT_ERROR).warning();
      }
    },
    [SignIn, history]
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
				<Screen.with.Title>Bem-vindo(a) de volta</Screen.with.Title>
				<Screen.with.Description>
					Por favor, preencha seus dados de login para continuar.
				</Screen.with.Description>
			</Screen.layout.Header>

			<Screen.layout.Content>
				<Screen.with.Form onSubmit={handleSubmit(handleFormSubmit)}>
					<Screen.with.InputContainer>
						<Screen.with.FormLabel>Email</Screen.with.FormLabel>
						<Screen.with.FormInput
                placeholder="seu_email@mail.com"
                name="email"
								type="email"
								autoComplete="current-email"
                defaultValue=""
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
								autoComplete="current-password"
                defaultValue=""
                ref={register}
              />
						<Screen.with.ErrorMessage>
							{errors.password && errors.password?.message}
						</Screen.with.ErrorMessage>
					</Screen.with.InputContainer>

					<Screen.with.ButtonContainer>
						<Screen.with.FormButton type="submit">
							Entrar
						</Screen.with.FormButton>

						<Screen.with.SignUp
                type="button"
                onClick={handleShowModalSigIn}
              >
							Não tem conta ?
						</Screen.with.SignUp>

						<SignUpScreen
                visible={showModalSignIn}
                handleCancel={handleCancelModalSigIn}
              />
					</Screen.with.ButtonContainer>

					<Screen.with.RecoveryPassword to="/#">
						<Screen.with.RecoveryPasswordTitle>
							Não lembra da senha ?
						</Screen.with.RecoveryPasswordTitle>
					</Screen.with.RecoveryPassword>

				</Screen.with.Form>

			</Screen.layout.Content>

		</Screen.layout.Base>
	</Modal>
  );
};

export { SignInScreen };
