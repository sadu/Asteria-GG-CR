// contain only one decimal point
function roundToOneDecimal(value) {
    return Number(`${Math.round(`${value}e1`)}e-1`);
}

export function biller(bill, amt, qty, customtax) {
    try {
        if (arguments.length === 4) {
            bill.gst += ((customtax * amt) / 100) * qty;
        }
    } catch (err) {
        if (err === 'error1') {
            return;
        }
    }

    bill.gross = (amt * qty) + bill.gross;
    bill.serviceCharge = bill.gross * (10 / 100);
    bill.total = bill.gross + bill.gst + bill.serviceCharge;

    bill.total = roundToOneDecimal(bill.total);
    bill.gross = roundToOneDecimal(bill.gross);
    bill.gst = roundToOneDecimal(bill.gst);
    bill.serviceCharge = roundToOneDecimal(bill.serviceCharge);

    return bill;
}
