import { formatDate, incrementDaysOnDateAndSkipWeekends, parseToDate } from "../../../utils/dateUtils.mjs";

export function calculeMeetingDate(initialDate, incrementDays) {
    console.log(`Initializing calculeMeetingDate method with initialDate: ${initialDate} and incrementDays: ${incrementDays}`);
    try {
        let parsedDate = parseToDate(initialDate);
        console.log(`parsedToDateResult: ${parsedDate}`);

        let resultIncrementedDate = incrementDaysOnDateAndSkipWeekends(parsedDate, incrementDays);
        console.log(`result incrementDaysOnDateAndSkipWeekends: day: ${resultIncrementedDate}`);

        const finalDate = formatDate(resultIncrementedDate);
        console.log(`Completed calculateDate method, returning date value ${finalDate}`);

        return finalDate;
    } catch (error) {
        console.error(`Error in calculeMeetingDate: ${error.message}`);
        throw error;
    }
}
