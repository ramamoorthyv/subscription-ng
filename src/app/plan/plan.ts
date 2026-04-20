import { Component, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { Plan as PlanInterface } from '../interface/plan';
import { PlanService } from '../plan-service';

@Component({
  selector: 'app-plan',  
  imports: [NgFor],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {
  plans = signal<PlanInterface[]>([]);  


  api = inject(PlanService);

  constructor() {
    this.getPlans();
  }
  getPlans() {
    this.api.getPlans().subscribe((plans) => {
      this.plans.set(plans);
    });
  }

}
