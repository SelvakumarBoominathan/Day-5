class Uber_Calc {

  private Passenger_Name: string;
  private range_covered: number;
  private Passenger_count: number;


  constructor(name: string, range: number, count_of_members: number) {
    this.Passenger_Name = name;
    this.range_covered = range;
    this.Passenger_count = count_of_members;
  }

  Amount_payable(): number {
    return this.range_covered * 10 * this.Passenger_count;
  }
}

const fare_amount = new Uber_Calc("Dinesh", 5, 2);

console.log(`${fare_amount.Amount_payable()}₹`);





