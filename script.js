"use strict";
(function() {

    const entry = [0,0,6,8,0,0,0,0,2,0,0,8,0,0,0,0,5,0,0,2,0,9,6,7,0,0,3,2,0,0,5,3,0,9,0,4,3,5,4,0,0,0,2,6,8,8,0,9,0,4,2,0,0,1,5,0,0,3,9,6,0,8,0,0,9,0,0,0,0,4,0,0,1,0,0,0,0,5,3,0,0];


    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = entry[i] || '';
    }


    let unsetCount = 0;
    for(let i = 0; i < entry.length; i++) {
        if(!entry[i]) unsetCount++;
    }
    console.log(unsetCount, 'unsetCount');

    console.time('go');
    while(unsetCount != 0) {
        for(let i = 0; i < 9; i++) {
            let sectorUnmetNumbers = getSectorUnmetNumbers(i + 1);
            let sectorUnsetCells = getSectorUnsetCells(i + 1);

            sectorUnmetNumbers.forEach( unmetNumber => {
                let log = [];
                let possiblePositions = [];
                sectorUnsetCells.forEach( unsetCell => {
                    if(canNumberBeInCell(unmetNumber, unsetCell)) possiblePositions.push(unsetCell);
                    log.push(canNumberBeInCell(unmetNumber, unsetCell));
                });
                if(possiblePositions.length == 1) {
                    entry[possiblePositions[0]] = unmetNumber;
                    unsetCount--;
                    updateDOM();
                }
            });
        }
        console.log(unsetCount, 'unsetCount');
    }
    console.timeEnd('go');


    //Functions
    function getSectorUnmetNumbers(sectorNumber) {
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let iterator = 0;
        let sectorModifier = (sectorNumber - 1) * 3 + Math.floor((sectorNumber-1) / 3) * 18;

        for(let i = 0; i < 9; i++) {
            let index = result.indexOf(entry[i + iterator + sectorModifier]);

            if(index != -1) {
                result.splice(index, 1);
            }

            if((i + 1) % 3 == 0) {
                iterator += 6;
            }
        }

        return result;
    }

    function getSectorUnsetCells(sectorNumber) {
        let result = [];
        let iterator = 0;
        let sectorModifier = (sectorNumber - 1) * 3 + Math.floor((sectorNumber-1) / 3) * 18;

        for(let i = 0; i < 9; i++) {
            if(!entry[i + iterator + sectorModifier]) result.push(i + iterator + sectorModifier);


            if((i + 1) % 3 == 0) {
                iterator += 6;
            }
        }

        return result;
    }

    function canNumberBeInCell(number, cellId) {
        let yStart = Math.floor(cellId / 9) * 9;
        let xStart = cellId - yStart;
        let possible = true;

        //Remove horizontal met numbers
        for(let i = 0; i < 9; i++) {
            if(entry[yStart + i] == number) possible = false;
        }
        //Remove vertical met numbers
        for(let i = 0; i < 9; i++) {
            if(entry[xStart + (i * 9)] == number) possible = false;
        }

        return possible;
    }

    function updateDOM() {
        for(let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = entry[i] || '';
        }
    }


})();



