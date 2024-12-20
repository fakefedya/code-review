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

type Res = IResponseSuccess | IResponseFailed

//Type Guard
function isSuccess(result: Res): result is IResponseSuccess {
	if (result.status === PaymentStatus.SUCCESS) {
		return true
	} else {
		return false
	}
}

function getIdFromData(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId
	} else {
		throw new Error(res.data.errorMessage)
	}
}
