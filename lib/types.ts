export type Transaction = {
	accountId: string;
	amount: number;
	category: string;
	channel: string;
	date: string;
	id: string;
	image?: string;
	name: string;
	paymentChannel: string;
	pending: boolean;
	transactionType: "credit" | "debit";
	type: string;
};