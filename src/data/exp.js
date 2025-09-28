export function calculateYOE(experiences) {
  const now = new Date();

  function parseDate(dateStr) {
    if (dateStr.toLowerCase() === "present") return now;

    const [monthStr, year] = dateStr.split(" ");
    const month = new Date(`${monthStr} 1, ${year}`).getMonth();
    return new Date(year, month, 1);
  }

  let totalMonths = 0;

  experiences.forEach(exp => {
    const [startStr, endStr] = exp.date.split(" - ");
    const start = parseDate(startStr.trim());
    const end = parseDate(endStr.trim());

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    totalMonths += months;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
      years,
      months,
      asOf: now.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      approxInYears: +(totalMonths / 12).toFixed(1)
  };
}

// // Example usage
// const yoeJSON = calculateYOE(experiences);
// console.log(yoeJSON);