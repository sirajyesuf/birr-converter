import { create } from "zustand";

interface State {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}

interface Currency {

    code: string
	alphaCode: string
	numericCode: string
	name: string
	rate: number
	date: string
	inverseRate: number,
}

const usd = {
    code: "USD",
    alphaCode: "usd",
    numericCode: "88",
    name: "usd america",
    rate: 123456,
    date: "12-33-44",
    inverseRate: 98765,
  };

interface CurrencyState {
    currency:Currency,
    setCurrency: (val: Currency) => void;
}


export const useIsCountryDrawerOpen = create<State>()((set) => ({
    isOpen: false,
    setIsOpen: (val) => set(() => ({ isOpen: val })),
}))

export const useCurrency = create<CurrencyState>()((set) => ({
    currency: usd,
    setCurrency: (val:Currency) => set(() => ({ currency: val })),
}))