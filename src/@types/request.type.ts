export type TResponse = {
	status: number;
	ok: boolean,
  data: {
    error: string;
    message: string;
		token: string;
		details?: string;
  };
};
