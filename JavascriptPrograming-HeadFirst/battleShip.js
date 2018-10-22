let view = {
    displayMessage: function (msg) {
        let messageAreaObj = document.getElementById("messageArea")
        messageAreaObj.innerHTML = msg
    },

    displayHit: function (location) {
        let cell = document.getElementById(location)
        cell.setAttribute("class", "hit")
    },

    displayMiss: function (location) {
        let cell = document.getElementById(location)
        cell.setAttribute("class", "miss")
    }
}

let model = {
    boardSize: 7,
    numShips: 3,
    shipSunk: 0,
    shipLength: 3,
    ships: [
        {
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }
    ],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i]
            let index = ship.locations.indexOf(guess)

            if (index >= 0) {
                ship.hits[index] = "hit"
                view.displayHit(guess)
                view.displayMessage("Hit!")

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleShip!")
                    this.shipSunk++
                }
                return true
            }
        }

        view.displayMiss(guess)
        view.displayMessage("You missed")
        return false
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false
            }
        }

        return true
    }
}

model.fire("53")

model.fire("06")
model.fire("16")
model.fire("26")

model.fire("34")
model.fire("24")
model.fire("44")