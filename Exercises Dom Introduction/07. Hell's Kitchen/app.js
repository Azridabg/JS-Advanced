function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arr = JSON.parse(document.querySelector('#inputs textarea').value);
      let output = {};

      for (let line of arr) {
         // if there is a restaurant that is already appeared in result then must add new workers!!! Maybe that will solve the problem.
         let [restaurant, workers] = line.split('-');
         if (!output.hasOwnProperty(restaurant)) {
            output[restaurant] = {
               name: restaurant,
            };
         }
         let bestAverageSalary = 0;


         workers = workers.split(',');
         let numberOfWorkers = 0;

         if (Object.keys(output[restaurant]) === 1) {

            for (let i = 0; i < workers.length; i++) {
               let salary = Number(workers[i].split(' ')[2]);
               bestAverageSalary += salary
               numberOfWorkers++;
            }
            bestAverageSalary = bestAverageSalary / numberOfWorkers;
            output[restaurant]['averageSalary'] = Number(bestAverageSalary.toFixed(2));
            output[restaurant]['people'] = [];

            for (let i = 0; i < workers.length; i++) {
               let name = workers[i].split(' ')[1];
               let salary = Number(workers[i].split(' ')[2]);
               output[restaurant]['people'].push([name, salary]);
            }
         }

         else {
            delete output[restaurant].averageSalary;
            delete output[restaurant].people;

            for (let i = 0; i < workers.length; i++) {
               let salary = Number(workers[i].split(' ')[2]);
               bestAverageSalary += salary
               numberOfWorkers++;
            }
            bestAverageSalary = bestAverageSalary / numberOfWorkers;
            output[restaurant]['averageSalary'] = Number(bestAverageSalary.toFixed(2));
            output[restaurant]['people'] = [];

            for (let i = 0; i < workers.length; i++) {
               let name = workers[i].split(' ')[1];
               let salary = Number(workers[i].split(' ')[2]);
               output[restaurant]['people'].push([name, salary]);
            }
         }



      }

      let sort = Object.values(output).sort((a, b) => {
         return b.averageSalary - a.averageSalary;
      });


      let result = sort[0];

      Object.values(result)[2].sort((a, b) => {
         return b[1] - a[1]
      });


      let restaurantName = result.name.trim();
      let averageSalary = result.averageSalary;
      let biggestSalary = 0;
      let secondLine = '';

      for (let i = 0; i < result.people.length; i++) {
         secondLine += `Name: ${result.people[i][0]} With Salary: ${result.people[i][1]} `;

         if (biggestSalary < result.people[i][1]) {
            biggestSalary = result.people[i][1];
         }
      }

      let firstLine = `Name: ${restaurantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${biggestSalary.toFixed(2)}`;


      let bestRestaurantPElement = document.querySelector('#bestRestaurant p');
      bestRestaurantPElement.innerHTML = firstLine;

      let bestRestaurantWorkersPElement = document.querySelector('#workers p');
      bestRestaurantWorkersPElement.innerHTML = secondLine;
   }
}