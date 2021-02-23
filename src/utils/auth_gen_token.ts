const generate = (authToken: string) => `Bearer ${authToken}`;

const tokenGenerate = {
	generate,
};

export default tokenGenerate;
