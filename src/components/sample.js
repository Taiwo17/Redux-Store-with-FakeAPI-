function update_amounts() {
  var sum = 0.0
  document.querySelector('#myTable > tbody  > tr').each(function () {
    var qty = document
      .querySelector(this)
      .querySelector('option:selected').value
    // Fix: price is in text, not in a form field
    // and it must be cleaned from the pound sign
    var price = document
      .querySelector(this)
      .querySelector('.price')
      .text()
      .replace(/[^d.]/, '')
    var amount = qty * price
    sum += amount
    document
      .querySelector(this)
      .querySelector('.subtotal')
      .text('£' + amount)
  })

  //just update the total to sum
  document.querySelector('.total').text('£' + sum)
}
