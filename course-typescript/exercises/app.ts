interface IPayment {
	sum: number
	from: number
	to: number
}

enum PaymentStatus {
	SUCCESS = 'success',
	FAILED = 'failed',
}

interface IPaymentsRequest extends IPayment {}

interface IDataSuccess extends IPayment {
	databaseId: number
}

interface IDataFailed {
	errorMessage: string
	errorCode: number
}

interface IResponseSuccess {
	status: PaymentStatus.SUCCESS
	data: IDataSuccess
}

interface IResponseFailed {
	status: PaymentStatus.FAILED
	data: IDataFailed
}
