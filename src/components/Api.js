// Sample data
const availableTimesData = {
    '25-09-2023': generateRandomTimes(),
    '26-09-2023': generateRandomTimes(),
    '27-09-2023': generateRandomTimes(),
    '28-09-2023': generateRandomTimes(),
    '29-09-2023': generateRandomTimes(),
    '30-09-2023': generateRandomTimes(),
    '01-10-2023': generateRandomTimes(),
    '02-10-2023': generateRandomTimes(),
    '03-10-2023': generateRandomTimes(),
    '04-10-2023': generateRandomTimes(),
}

function generateRandomTimes() {
    const times = []
    for (let i = 0; i < 3; i++) {
        const hour = Math.floor(Math.random() * 24)
        const minute = Math.floor(Math.random() * 60)
        times.push(
            `${hour.toString().padStart(2, '0')}:${minute
                .toString()
                .padStart(2, '0')}`
        )
    }
    return times
}

// Function to fetch available reservation times for a date
function fetchAPI(date) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const availableTimes = availableTimesData[date] || []
            resolve(availableTimes)
        }, 1000) // Simulate a delay to mimic network request
    })
}

// Function to submit booking form data
function submitAPI(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a successful submission for demonstration purposes
            resolve(true)
        }, 1000) // Simulate a delay to mimic network request
    })
}

module.exports = { fetchAPI, submitAPI }
