import { calculeMeetingDate } from "./service/meetingCalculator.mjs";

console.log(`init process calling the function to create a new meeting date with the params of the date and the number of days to add`);
const dataInicial = "18/05/2024";
const incrementDays = 60;
try {
    const response = calculeMeetingDate(dataInicial, incrementDays);
    console.log(`result: ${response}`);
} catch (error) {
    console.error(`Occur an error on the processing: ${error.message}`);
}
console.log(`end process`);