"use strict";
(function () {
    const sudoku = {
        easy: {
            sudoku1: [
                [3, 0, 6, 8, 0, 5, 9, 1, 0],
                [2, 0, 5, 7, 9, 6, 0, 0, 0],
                [0, 7, 0, 0, 0, 0, 0, 0, 6],
                [0, 0, 4, 0, 0, 0, 0, 8, 0],
                [0, 3, 0, 1, 0, 7, 0, 2, 0],
                [0, 9, 0, 0, 0, 0, 4, 0, 0],
                [5, 0, 0, 0, 0, 0, 0, 9, 0],
                [0, 0, 0, 6, 1, 4, 8, 0, 5],
                [0, 8, 1, 3, 0, 9, 6, 0, 2]
            ],
            sudoku2: [
                [2, 4, 0, 3, 0, 1, 0, 0, 8],
                [0, 0, 3, 9, 0, 0, 4, 2, 1],
                [1, 8, 0, 0, 0, 4, 6, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 9, 0],
                [0, 0, 8, 2, 0, 6, 5, 0, 0],
                [0, 2, 0, 0, 3, 0, 0, 0, 0],
                [0, 0, 4, 6, 0, 0, 0, 5, 9],
                [6, 9, 2, 0, 0, 3, 1, 0, 0],
                [5, 0, 0, 8, 0, 7, 0, 6, 4]
            ],
            sudoku3: [
                [7, 0, 0, 1, 4, 0, 0, 0, 2],
                [8, 3, 0, 0, 7, 0, 1, 0, 0],
                [0, 2, 0, 0, 0, 0, 7, 9, 0],
                [3, 8, 7, 0, 6, 0, 0, 2, 0],
                [0, 0, 4, 0, 1, 0, 8, 0, 0],
                [0, 5, 0, 0, 9, 0, 4, 7, 3],
                [0, 1, 8, 0, 0, 0, 0, 3, 0],
                [0, 0, 3, 0, 5, 0, 0, 8, 9],
                [9, 0, 0, 0, 8, 6, 0, 0, 7]
            ]
        },
        medium: {
            sudoku1: [
                [0, 7, 2, 0, 6, 0, 0, 0, 0],
                [9, 1, 0, 0, 0, 0, 4, 0, 0],
                [0, 0, 5, 0, 0, 7, 8, 0, 1],
                [0, 0, 0, 7, 1, 0, 0, 0, 0],
                [0, 0, 1, 4, 2, 6, 5, 0, 0],
                [0, 0, 0, 0, 3, 9, 0, 0, 0],
                [1, 0, 6, 3, 0, 0, 7, 0, 0],
                [0, 0, 4, 0, 0, 0, 0, 8, 5],
                [0, 0, 0, 0, 7, 0, 2, 3, 0]
            ],
            sudoku2: [
                [0, 0, 0, 0, 6, 0, 0, 4, 3],
                [6, 0, 0, 0, 0, 9, 0, 0, 0],
                [0, 5, 1, 0, 0, 8, 0, 0, 0],
                [8, 0, 6, 0, 5, 1, 3, 2, 0],
                [0, 3, 0, 0, 8, 0, 0, 9, 0],
                [0, 1, 9, 4, 3, 0, 7, 0, 8],
                [0, 0, 0, 2, 0, 0, 4, 8, 0],
                [0, 0, 0, 8, 0, 0, 0, 0, 1],
                [9, 4, 0, 0, 1, 0, 0, 0, 0]
            ],
            sudoku3: [
                [1, 0, 9, 0, 0, 0, 7, 8, 0],
                [8, 0, 0, 4, 0, 0, 9, 1, 0],
                [0, 7, 0, 0, 9, 0, 3, 0, 0],
                [0, 0, 0, 7, 0, 0, 4, 3, 0],
                [6, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 8, 4, 0, 0, 9, 0, 0, 0],
                [0, 0, 7, 0, 5, 0, 0, 6, 0],
                [0, 2, 6, 0, 0, 4, 0, 0, 7],
                [0, 1, 8, 0, 0, 0, 2, 0, 3]
            ]
        },
        hard: {
            sudoku1: [
                [3, 0, 0, 0, 9, 7, 0, 0, 1],
                [0, 7, 0, 1, 0, 0, 0, 2, 0],
                [0, 0, 0, 0, 0, 0, 5, 0, 0],
                [0, 0, 0, 0, 5, 8, 3, 0, 0],
                [9, 0, 7, 0, 4, 0, 8, 0, 2],
                [0, 0, 3, 9, 7, 0, 0, 0, 0],
                [0, 0, 5, 0, 0, 0, 0, 0, 0],
                [0, 3, 0, 0, 0, 5, 0, 4, 0],
                [8, 0, 0, 2, 1, 0, 0, 0, 6]
            ],
            sudoku2: [
                [6, 0, 5, 1, 9, 0, 0, 3, 0],
                [9, 0, 8, 0, 0, 0, 6, 0, 0],
                [0, 2, 0, 6, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 4, 3, 0, 0],
                [7, 5, 0, 0, 0, 0, 0, 4, 1],
                [0, 0, 4, 9, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 2, 0],
                [0, 0, 1, 0, 0, 0, 4, 0, 7],
                [0, 6, 0, 0, 2, 8, 1, 0, 9]
            ],
            sudoku3: [
                [0, 1, 0, 3, 0, 4, 0, 0, 0],
                [2, 0, 0, 7, 0, 0, 5, 0, 0],
                [0, 5, 7, 0, 0, 1, 0, 0, 0],
                [4, 0, 0, 1, 0, 0, 8, 0, 0],
                [0, 8, 0, 0, 0, 0, 0, 7, 0],
                [0, 0, 3, 0, 0, 5, 0, 0, 1],
                [0, 0, 0, 5, 0, 0, 2, 9, 0],
                [0, 0, 5, 0, 0, 6, 0, 0, 8],
                [0, 0, 0, 8, 0, 3, 0, 4, 0]
            ]
        },
        evil: {
            sudoku1: [
                [7, 0, 0, 8, 0, 9, 0, 0, 5],
                [0, 0, 9, 0, 0, 5, 7, 0, 0],
                [0, 0, 0, 0, 0, 3, 4, 0, 0],
                [8, 6, 0, 0, 0, 0, 9, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 4],
                [0, 0, 7, 0, 0, 0, 0, 3, 8],
                [0, 0, 6, 9, 0, 0, 0, 0, 0],
                [0, 0, 5, 4, 0, 0, 2, 0, 0],
                [4, 0, 0, 1, 0, 2, 0, 0, 7]
            ],
            sudoku2: [
                [8, 1, 0, 4, 0, 5, 0, 0, 0],
                [0, 0, 0, 9, 0, 0, 6, 8, 0],
                [0, 0, 0, 6, 0, 0, 0, 1, 0],
                [5, 0, 0, 0, 0, 0, 2, 0, 0],
                [0, 4, 0, 0, 7, 0, 0, 9, 0],
                [0, 0, 3, 0, 0, 0, 0, 0, 1],
                [0, 9, 0, 0, 0, 3, 0, 0, 0],
                [0, 2, 5, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 2, 0, 6, 0, 7, 4]
            ],
            sudoku3: [
                [8, 0, 0, 1, 0, 7, 0, 0, 5],
                [0, 0, 6, 0, 0, 3, 4, 0, 0],
                [0, 0, 3, 0, 0, 5, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 3, 6, 0],
                [0, 0, 0, 7, 0, 6, 0, 0, 0],
                [0, 9, 7, 0, 0, 0, 0, 0, 0],
                [4, 0, 0, 8, 0, 0, 1, 0, 0],
                [0, 0, 1, 5, 0, 0, 8, 0, 0],
                [5, 0, 0, 3, 0, 1, 0, 0, 6]
            ]
        }
    };


    //On load execution
    let cells = document.getElementsByClassName('cell');
    let sudokuButton = document.getElementsByClassName('sudoku-button');
    let jsCells = [], unfilledCells = [], unsetCount = 0;

    for (let i = 0; i < cells.length; i++) {
        cells[i].setAttribute('id', i.toString());
        cells[i].addEventListener('click', selectCell);
    }

    for (let i = 0; i < sudokuButton.length; i++) {
        sudokuButton[i].addEventListener('click', sudokuButtonClick);
    }

    window.addEventListener('keydown', onKeyDown);
    document.querySelector('.start').addEventListener('click', go);
    //End on load


    //EVENTS HANDLERS
    //Window on keydown event handler
    function onKeyDown(event) {
        let value;

        switch (event.which) {
            case 27:
                value = '';
                clearSelection();
                break;
            case 8:
                value = '';
                break;
            case 49:
                value = '1';
                break;
            case 50:
                value = '2';
                break;
            case 51:
                value = '3';
                break;
            case 52:
                value = '4';
                break;
            case 53:
                value = '5';
                break;
            case 54:
                value = '6';
                break;
            case 55:
                value = '7';
                break;
            case 56:
                value = '8';
                break;
            case 57:
                value = '9';
                break;
        }

        let focused = document.getElementsByClassName('focused');
        if (focused.length && value != undefined) {
            focused[0].innerHTML = value;
            focused[0].classList.add('filled');
            clearSelection();
        }
    }

    //Event on cell click
    function selectCell(event) {
        if (event.target.classList.contains('not-editable')) return;

        clearSelection();
        event.target.classList.add('focused');
    }

    //Sudoku button click
    function sudokuButtonClick(event) {
        fillSudoku(sudoku[event.target.getAttribute('data-target')]['sudoku1']);
    }


    //Deselect all cells
    function clearSelection() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('focused');
        }
    }


    function fillSudoku(array) {
        clearSelection();
        for (let i = 0; i < cells.length; i++) {
            let y = Math.floor(i / 9);
            let x = i - y * 9;

            cells[i].classList.remove('filled');
            cells[i].innerHTML = '';
            cells[i].classList.add('not-editable');

            if (array[y][x] != 0) {
                cells[i].innerHTML = array[y][x];
                cells[i].classList.add('filled');
            }
        }
    }


    //Win sudoku
    function go() {
        jsCells = [];
        unsetCount = 0;

        for (let i = 0; i < cells.length; i++) {
            jsCells.push(+cells[i].innerHTML);
        }

        for (let i = 0; i < jsCells.length; i++) {
            if (!jsCells[i]) unsetCount++;
        }

        console.time('go');
        let breakpoint = 0;
        while (unsetCount != 0) {

            fillSectors();
            fillHorizontal();
            fillVertical();

            // canNumberBeInCell(3, 15);

            // console.log(unsetCount, 'unsetCount');
            if (++breakpoint == 50) break;

        }
        console.log('Finished in ' + breakpoint + ' iterations');
        console.timeEnd('go');

    }

    //Functions
    function fillSectors() {
        for (let i = 0; i < 9; i++) {
            let sectorUnmetNumbers = getSectorUnmetNumbers(i + 1);
            let sectorUnsetCells = getSectorUnsetCells(i + 1);

            sectorUnmetNumbers.forEach(unmetNumber => {
                let possiblePositions = [];

                sectorUnsetCells.forEach(unsetCell => {
                    if (canNumberBeInCell(unmetNumber, unsetCell)) possiblePositions.push(unsetCell);
                });

                if (possiblePositions.length == 1) {
                    jsCells[possiblePositions[0]] = unmetNumber;
                    unsetCount--;
                    updateDOM();
                }
            });
        }
    }

    function fillHorizontal() {
        for (let i = 0; i < 9; i++) {
            let lineUnmetNumbers = getHorizontalUnmetNumbers(i + 1);
            let lineUnsetCells = getHorizontalUnsetCells(i + 1);

            lineUnmetNumbers.forEach(unmetNumber => {
                let possiblePositions = [];

                lineUnsetCells.forEach(unsetCell => {
                    if (canNumberBeInCell(unmetNumber, unsetCell)) possiblePositions.push(unsetCell);
                });

                if (possiblePositions.length == 1) {
                    jsCells[possiblePositions[0]] = unmetNumber;
                    unsetCount--;
                    updateDOM();
                }
            });
        }
    }

    function fillVertical() {
        for (let i = 0; i < 9; i++) {
            let lineUnmetNumbers = getVerticalUnmetNumbers(i + 1);
            let lineUnsetCells = getVerticalUnsetCells(i + 1);

            lineUnmetNumbers.forEach(unmetNumber => {
                let possiblePositions = [];

                lineUnsetCells.forEach(unsetCell => {
                    if (canNumberBeInCell(unmetNumber, unsetCell)) possiblePositions.push(unsetCell);
                });

                if (possiblePositions.length == 1) {
                    jsCells[possiblePositions[0]] = unmetNumber;
                    unsetCount--;
                    updateDOM();
                }
            });
        }
    }


    function getSectorUnmetNumbers(sectorNumber) {
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let iterator = 0;
        let sectorModifier = (sectorNumber - 1) * 3 + Math.floor((sectorNumber - 1) / 3) * 18;

        for (let i = 0; i < 9; i++) {
            let index = result.indexOf(jsCells[i + iterator + sectorModifier]);

            if (index != -1) result.splice(index, 1);

            if ((i + 1) % 3 == 0) {
                iterator += 6;
            }
        }

        return result;
    }

    function getSectorUnsetCells(sectorNumber) {
        let result = [];
        let iterator = 0;
        let sectorModifier = (sectorNumber - 1) * 3 + Math.floor((sectorNumber - 1) / 3) * 18;

        for (let i = 0; i < 9; i++) {
            if (!jsCells[i + iterator + sectorModifier]) result.push(i + iterator + sectorModifier);


            if ((i + 1) % 3 == 0) {
                iterator += 6;
            }
        }

        return result;
    }

    function getHorizontalUnmetNumbers(lineNumber) {
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let yStart = (lineNumber - 1) * 9;

        for (let i = 0; i < 9; i++) {
            let index = result.indexOf(jsCells[yStart + i]);
            if (index != -1) result.splice(index, 1);
        }

        return result;
    }

    function getHorizontalUnsetCells(lineNumber) {
        let result = [];
        let yStart = (lineNumber - 1) * 9;

        for (let i = 0; i < 9; i++) {
            if (!jsCells[yStart + i]) result.push(yStart + i);
        }

        return result;
    }

    function getVerticalUnmetNumbers(lineNumber) {
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let xStart = lineNumber - 1;

        for (let i = 0; i < 9; i++) {
            let index = result.indexOf(jsCells[xStart + (i * 9)]);
            if (index != -1) result.splice(index, 1);
        }

        return result;
    }

    function getVerticalUnsetCells(lineNumber) {
        let result = [];
        let xStart = lineNumber - 1;

        for (let i = 0; i < 9; i++) {
            if (!jsCells[xStart + (i * 9)]) result.push(xStart + (i * 9));
        }

        return result;
    }

    function canNumberBeInCell(number, cellId) {
        let yStart = Math.floor(cellId / 9) * 9,
            xStart = cellId - yStart,
            iterator = 0,
            sectorNumber = (Math.floor(Math.floor(cellId / 9) / 3) * 3 + 1) + (Math.floor((cellId % 9) / 3)),
            sectorModifier = (sectorNumber - 1) * 3 + Math.floor((sectorNumber - 1) / 3) * 18,
            possible = true;

        //Check horizontal meets
        for (let i = 0; i < 9; i++) {
            if (jsCells[yStart + i] == number) possible = false;
        }

        //Check vertical meets
        for (let i = 0; i < 9; i++) {
            if (jsCells[xStart + (i * 9)] == number) possible = false;
        }

        //Check sector meets
        for (let i = 0; i < 9; i++) {
            let index = i + iterator + sectorModifier;
            if (jsCells[index] == number) possible = false;

            if ((i + 1) % 3 == 0) {
                iterator += 6;
            }
        }

        return possible;
    }


    function updateDOM() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = jsCells[i] || '';
        }
    }

})();



