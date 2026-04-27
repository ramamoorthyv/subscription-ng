import { Component,inject } from '@angular/core';
import { PlanService } from '../plan-service';
import { Plan } from '../plan/plan';

@Component({
  selector: 'app-my-plans',
  imports: [],
  templateUrl: './my-plans.html',
  styleUrl: './my-plans.css',
})
export class MyPlans {
  api = inject(PlanService);
  //plans = this.api.ListPlans();

}
