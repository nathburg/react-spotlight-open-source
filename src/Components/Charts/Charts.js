import { VictoryBar, VictoryChart } from 'victory';

export default function Charts() {
  const data = [
    { age: 12, car_year: 1950 },
    { age: 58, car_year: 1981 },
    { age: 32, car_year: 2022 },
    { age: 69, car_year: 1977 },
    { age: 64, car_year: 1998 },
    { age: 41, car_year: 1991 },
    { age: 22, car_year: 2009 },
    { age: 29, car_year: 2015 },
    { age: 16, car_year: 2020 },
    { age: 79, car_year: 1977 },
    { age: 55, car_year: 2019 },
    { age: 42, car_year: 2003 }
  ];


  return (
    <div>
      <h1>A Brief Scientific Study of Some People</h1>
      <h2>Their Age and the Year of Car they Drive</h2>
      <VictoryChart>
        <VictoryBar 
          data={data}
          x='age'
          y='car_year'
        />
      </VictoryChart>
    </div>
  );
}
