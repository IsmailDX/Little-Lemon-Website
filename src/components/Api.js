// Sample data
const availableTimesData = generateAvailableTimes()

function generateAvailableTimes() {
    const availableTimes = {}
    const currentDate = new Date()

    for (let i = 0; i < 10; i++) {
        const date = new Date(currentDate)
        date.setDate(currentDate.getDate() + i)
        const formattedDate = formatDate(date)
        availableTimes[formattedDate] = generateRandomTimes()
    }

    return availableTimes
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}-${month}-${year}`
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
