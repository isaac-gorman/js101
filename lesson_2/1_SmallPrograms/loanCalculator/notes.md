# Informal Pseudo Code

## INPUTS & OUTPUTS

**Inputs**

- Loan amount
- Annual percentage rate (APR)
- Loan duration

**Outputs**

- monthly interest rate
- loan duration in months

## BASIC LOGIC (NOT DYNAMIC)

    Get all three inputs from the user:
      1.  loanAmount
      2.  annualPercentageRate (as a decimal 6% = 0.06)
      3.  loanDuration in years

    Confirm that each input is acceptable.
    Convert acceptable inputs to correct data type. loanAmount,
    and loanDuration to number, and annualPercentageRate
    to a floating point number.

    Create function called getMonthlyPayment:
    Pass getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration)
    Assign variables:

    - const MONTHS_IN_YEAR tp 12
    - monthlyRate to annualPercentageRate / MONTHS_IN_YEAR
    - numberOfPayments to loanDuration \* MONTHS_IN_YEAR
    - monthlyPayments to the formula:
      loanAmount \*
      (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments)))

    Return monthlyPayments
