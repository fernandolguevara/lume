import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useMemo,
} from "react";
import { Ark } from "./ark";

export const ArkContext = createContext<Ark>(undefined);

export const ArkProvider = ({ children }: PropsWithChildren<object>) => {
	const ark = useMemo(() => new Ark(), []);

	useEffect(() => {
		if (ark) ark.load_account();
	}, []);

	return <ArkContext.Provider value={ark}>{children}</ArkContext.Provider>;
};

export const useArk = () => {
	const context = useContext(ArkContext);
	if (context === undefined) {
		throw new Error("Ark Provider is not import");
	}
	return context;
};
