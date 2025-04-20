function reshufleArray(arrayToShuffle, oldIndex = 0, usedIndexes = [], shuffledArray = []) {
    if (oldIndex >= arrayToShuffle.length) return shuffledArray;

    const createIndex = Math.floor(Math.random() * arrayToShuffle.length);
    if (usedIndexes.includes(createIndex)) return reshufleArray(arrayToShuffle, oldIndex, usedIndexes, shuffledArray);
    shuffledArray[createIndex] = arrayToShuffle[oldIndex];
    usedIndexes.push(createIndex);

    return reshufleArray(arrayToShuffle, ++oldIndex, usedIndexes, shuffledArray);
}

function handlePointsUp(e) {
    const scoreEl = document.getElementById("score");
    if (e.propertyName === "scale") scoreEl.classList.remove("shine");
}

function handlePointsDown(e) {
    const scoreEl = document.getElementById("score");
    if (e.propertyName === "scale") scoreEl.classList.remove("shine-red");
}

export { reshufleArray, handlePointsDown, handlePointsUp }