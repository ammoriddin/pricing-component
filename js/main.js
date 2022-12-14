const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]')
const elsPaymentPriceValue = document.querySelectorAll(".pricing-plan-value")

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function () {
    const period = elPaymentPeriodRadio.value;  

    if (period === "annual") {
      elsPaymentPriceValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest(".pricing-plan").dataset.paymentAnnual;
      })
    }else {
      elsPaymentPriceValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest(".pricing-plan").dataset.paymentMonthly;
      })
    }
  })
})