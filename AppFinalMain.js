function calc() {

    const total = parseFloat(document.querySelector('#total-field').value)
    const tipRate = parseFloat(document.querySelector('#rate-field').value)

    const tip = total * (tipRate/100)
    const taxRate = 5.5
    const tax = total * (taxRate/100)
    const grandTotal = total + tip + tax
    

    document.querySelector('#tip-amount').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-amount').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#total-amount').innerHTML = `$${grandTotal.toFixed(2)}`
}
     document.querySelector('#calculate').addEventListener('click', calc)
     