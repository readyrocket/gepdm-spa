export interface AppProps {
	visible: boolean
	handleCancel: () => void;
}

export interface Position {
	coords: {
		latitude: number;
		longitude: number;
	}
}

export interface UserPositon {
	latitude: number;
	longitude: number;
}
