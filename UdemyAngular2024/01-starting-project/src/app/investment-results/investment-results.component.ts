import { Component, Input, computed, input } from '@angular/core';
import { IAnnualData } from '../annual-data.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentServiceService } from '../services/investment-service.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private _investmentService: InvestmentServiceService | undefined;

  constructor(investmentService: InvestmentServiceService) {
    this._investmentService = investmentService;
  }

  results = computed(() => {
    return this._investmentService?.resultData();
  });
}
