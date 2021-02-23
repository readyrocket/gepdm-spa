import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
	name: Yup.string().required(`Campo obrigatório`),

	email: Yup.string().email(`Email inválido`)
		.required(`Campo obrigatório`),

	password: Yup.string()
		.min(8, `O mínimo é 8 caracteres`)
		.required(`Campo obrigatório`)
		.oneOf([Yup.ref(`repeat_password`), null], `As senhas devem corresponder`),

	repeat_password: Yup.string()
		.required(`Campo obrigatório`)
		.min(8, `O mínimo é 8 caracteres`)
		.oneOf([Yup.ref(`password`), null], `As senhas devem corresponder`),

	privacy_policy: Yup.boolean()
		.required(`Você precisa estar de acordo com os termos de privacidade`)
		.nullable(false)
		.isTrue(`Você precisa estar de acordo com os termos de privacidade`),
});
