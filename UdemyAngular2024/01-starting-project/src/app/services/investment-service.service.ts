import { Injectable, signal } from '@angular/core';
import { IInvestmentInput } from '../investment-input.model';
import { IAnnualData } from '../annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentServiceService {
  resultData = signal<IAnnualData[] | undefined>(undefined);

  constructor() {}

  calculateInvestmentResults(data: IInvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData.set(annualData);
  }
}
