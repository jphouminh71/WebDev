import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestmentInput } from '../investment-input.model';
import { InvestmentServiceService } from '../services/investment-service.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<IInvestmentInput>();
  enteredInitialInvestment = signal('1000');
  enteredAnnualInvestment = signal('100');
  enteredExpectedReturnRate = signal('5');
  enteredDurationInput = signal('1');

  private _investmentService: InvestmentServiceService | undefined;

  constructor(investmentService: InvestmentServiceService) {
    this._investmentService = investmentService;
  }

  public onSubmit(): void {
    this._investmentService?.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturnRate(),
      duration: +this.enteredDurationInput(),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturnRate.set('0');
    this.enteredDurationInput.set('0');
  }
}
