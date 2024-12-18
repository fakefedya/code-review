"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 500] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 400] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS,
};
/*
    200 Успех
    'p' В процессе
    400 Отклонен
*/
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.FAILED);
function compute() {
    return 200;
}
const res2 = 1 /* Roles.ADMIN */;
