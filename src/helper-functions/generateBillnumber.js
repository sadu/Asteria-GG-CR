export function generateBillnumber() {
    const id = localStorage.length;
    return id + 1;
}
