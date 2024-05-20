export function parseToDate(initialDate) {
    console.log(`Init method parseToDate with initialDate: ${initialDate}`);
    try {
        const [day, month, year] = initialDate.split('/');
        if (!day || !month || !year) {
            throw new Error('Invalid date format. Expected DD/MM/YYYY.');
        }

        const parsedDate = new Date(year, month - 1, day);
        validateDate(parsedDate);

        return parsedDate;
    } catch (error) {
        console.error(`Error in parseToDate: ${error.message}`);
        throw error;
    }
}

export function incrementDaysOnDateAndSkipWeekends(initialDate, incrementDays) {
    console.log(`Init method incrementDaysOnDateAndSkipWeekends with initialDate: ${initialDate} and incrementDays: ${incrementDays}`);

    const SATURDAY = 6;
    const SUNDAY = 0;
    const INCREMENT_DAYS_ON_SATURDAY = 2;
    const INCREMENT_DAYS_ON_SUNDAY = 1;
    try {
        let resultParsedDate = new Date(initialDate.getTime() + (incrementDays * 24 * 60 * 60 * 1000));
        validateDate(resultParsedDate);

        let dayOfWeek = resultParsedDate.getDay();
        if (dayOfWeek === SATURDAY) {
            resultParsedDate = new Date(resultParsedDate.getTime() + (INCREMENT_DAYS_ON_SATURDAY * 24 * 60 * 60 * 1000));;
            console.log(`resultParsedDate + 2 days: ${resultParsedDate}`);
        } else if (dayOfWeek === SUNDAY) {
            resultParsedDate = new Date(resultParsedDate.getTime() + (INCREMENT_DAYS_ON_SUNDAY * 24 * 60 * 60 * 1000));;
            console.log(`resultParsedDate + 1 day: ${resultParsedDate}`);
        }

        return resultParsedDate;
    } catch (error) {
        console.error(`Error in incrementDaysOnDateAndSkipWeekends: ${error.message}`);
        throw error;
    }
}

export function formatDate(initialDate) {
    console.log(`Init method formatDate with initialDate: ${initialDate}`);
    try {
        const date = new Date(initialDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');

        return `${day}/${month}/${date.getFullYear()}`;
    } catch (error) {
        console.error(`Error in formatDate: ${error.message}`);
        throw error;
    }
}

export function validateDate(initialDate) {
    console.log(`Init method validateDate with initialDate: ${initialDate}`);
    try {
        const resultParsedDate = new Date(initialDate);
        if (resultParsedDate.toString() === 'Invalid Date') {
            console.log(`Invalid Date`);
            throw new Error('Invalid Date');
        }
        console.log(`Valid Date`);
    } catch (error) {
        console.error(`Error in validateDate: ${error.message}`);
        throw error;
    }
}