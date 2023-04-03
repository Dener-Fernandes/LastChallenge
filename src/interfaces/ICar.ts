interface ICar {
  model: string;
  color: string;
  year: string;
  value_per_day: number;
  accessories: [{
    description: string
  }];
  number_of_passenger: number;
}

export { ICar }