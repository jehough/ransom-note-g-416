function buildHistogram(array){
  let hash = {}
  array.forEach(el => {
    if (hash[el]){
      hash[el] += 1
    }
    else{
      hash[el] = 1
    }
  })
  return hash
}

function canBuildNote(magazine, note){
  let magazineHistorgram = buildHistogram(magazine)
  let noteArray = note.split()
}
