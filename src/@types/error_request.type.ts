export type RequestError = {
  response: {
		data: {
			config: {
				url: string,
				method: string,
				data: string;
			},
			data: {
				error: string,
				message: string;
			},
			status: number,
			statusText: string;
		}
  },
};
