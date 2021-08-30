import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-responses',
  templateUrl: './api-responses.component.html',
  styleUrls: ['./api-responses.component.scss']
})
export class ApiResponsesComponent implements OnInit {



  rows = [
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },
    { name: 'Carlos Andrés Gómez', gender: 'Male', company: 'Swimlane' },

  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor() { }

  ngOnInit(): void {
  }

}
