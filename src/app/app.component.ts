import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'compound-calculator';

  initialInvestment: number = 0;
  monthlyInvestments: number = 0;
  yearlyInvestments: number = 0;
  investmentHorizon: number = 0;
  predictedCompoundRate: number = 0;
  total: number = 0;
  totalSaved: number = 0;
  compoundPercentage: number = 0;
  interestEarnings: number = 0;

  yearlyCompoundInterestOnPrincipalAmount: number = 0;
  futureValueRecurringPaymentEarningInterest: number = 0;

  reset(): void {
    this.initialInvestment = 0;
    this.monthlyInvestments = 0;
    this.yearlyInvestments = 0;
    this.investmentHorizon = 0;
    this.predictedCompoundRate = 0;
    this.total = 0;
    this.totalSaved = 0;
    this.compoundPercentage = 0;
    this.interestEarnings = 0;
  }

  calculateStuff(number: number, type: string): void {
    if (number > 0) {
      switch (type) {
        case 'initial': {
          this.initialInvestment = number;
          break;
        }
        case 'monthly': {
          this.monthlyInvestments = number;
          this.yearlyInvestments = number * 12;
          break;
        }
        case 'horizon': {
          this.investmentHorizon = number;
          break;
        }
        default: {
          this.predictedCompoundRate = number;
          this.compoundPercentage = number / 100;
          break;
        }
      }

      this.yearlyCompoundInterestOnPrincipalAmount =
        this.initialInvestment *
        Math.pow(1 + this.compoundPercentage, this.investmentHorizon);

      this.futureValueRecurringPaymentEarningInterest =
        (this.yearlyInvestments *
          (Math.pow(1 + this.compoundPercentage, this.investmentHorizon) - 1)) /
        this.compoundPercentage;

      if (this.monthlyInvestments > 0) {
        this.total = Math.round(
          this.futureValueRecurringPaymentEarningInterest +
            this.yearlyCompoundInterestOnPrincipalAmount
        );
        this.totalSaved =
          this.initialInvestment +
          this.yearlyInvestments * this.investmentHorizon;
      } else {
        this.total = Math.round(this.yearlyCompoundInterestOnPrincipalAmount);
        this.totalSaved = this.initialInvestment;
      }

      this.interestEarnings = this.total - this.totalSaved;
    }
  }
}
