let homeCount = 0
let homeScoreEl = document.getElementById("home-score")

let guestCount = 0
let guestScoreEl = document.getElementById("guest-score")

function home1Point() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function home2Point() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function home3Point() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function guest1Point() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guest2Point() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guest3Point() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

function reset() {
    guestCount = 0
    homeCount = 0
    homeScoreEl.textContent = homeCount
    guestScoreEl.textContent = guestCount
}