import confetti from 'canvas-confetti'

export const objectsEqual = (o1, o2) => {
  return typeof o1 === 'object' && Object.keys(o1).length > 0
    ? Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
    : o1 === o2;
}

export const arraysEqual = (a1, a2) => {
  return a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));
}

export const deepCopyArray = (array) => {
  let copy = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      copy.push(deepCopyArray(element));
    } else {
      if (typeof element === 'object') {
        copy.push(deepCopyObject(element));
      } else {
        copy.push(element);
      }
    }
  })

  return copy;
}

// Helper function to deal with Objects
const deepCopyObject = (obj) => {
  let tempObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      tempObj[key] = deepCopyArray(value);
    } else {
      if (typeof value === 'object') {
        tempObj[key] = deepCopyObject(value);
      } else {
        tempObj[key] = value
      }
    }
  }

  return tempObj;
}

export const between = (number, min, max) => {
  return number >= min && number <= max;
}

export const shootConfetti = () => {
  var count = 100;
  var defaults = {
    origin: { y: 1 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  for (let i = 0; i < 5; i++) {
    fire(0.5, {
      spread: 100,
      startVelocity: 100,
      decay: 0.9,
      scalar: 1.5,
      zIndex: 1060,
    });
  }
}
