const initialDate = "January 1, 2024";

export const expenses = sortExpensesByDate(
  generateExpenses(150, 40, initialDate)
    .concat(generateExpenses(4, 250, initialDate))
    .concat(generateSalary(initialDate, 1500))
);

export const lastWeekExpenses = getLastWeek(expenses);

export const percentagePoint = getPercentage(lastWeekExpenses);

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Genera un saldo positivo de salary el primer dia de cada mes empezando en startDate y acabando en la fecha actual
function generateSalary(startDate, salary) {
  const salaryArray = [];
  const currentDate = new Date();
  let currentDateOfMonth = new Date(startDate);

  while (currentDateOfMonth <= currentDate) {
    salaryArray.push({ date: new Date(currentDateOfMonth), amount: salary });

    currentDateOfMonth.setMonth(currentDateOfMonth.getMonth() + 1, 1);
  }
  return salaryArray;
}

function generateExpenses(count, max, startDate) {
  const exp = [];
  for (let i = 0; i < count; i++) {
    exp.push({
      amount: -Math.ceil(Math.random() * max),
      date: randomDate(new Date(startDate), new Date()),
    });
  }
  return exp;
}

// Ordena por fecha y une los gastos del mismo día como uno solo
function sortExpensesByDate(expenses) {
  return expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// TODO: FALTA COMBINAR GASTOS DEL MISMO DÍA
// function combineSameDayExpenses(expenses) {
//   const combinedExpensesArray = [];
//   expenses.forEach((expense) => {
//     const { date, amount } = expense;
//     if (combinedExpensesArray.filter()) {
//       combinedExpensesArray[date] += amount;
//     } else {
//       combinedExpensesObj[date] = amount;
//     }
//   });

//   return combinedExpensesArray;
// }

// De momento cogemos los ultimos 7 gastos (aunque no correspondan a los días concretos) y eliminamos los cobros de 1500€
function getLastWeek(expenses) {
  return expenses
    .filter((e) => e.amount !== 1500)
    .slice(-7)
    .map((e) => -e.amount);
}

function getPercentage(expenses) {
  const percentage =
    Math.round(
      (1000 * (lastWeekExpenses[6] - lastWeekExpenses[5])) / lastWeekExpenses[5]
    ) / 10;
  return (percentage > 0 ? "+" : "") + ` ${percentage} %`;
}
