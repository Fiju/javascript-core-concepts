function outerFunc() {
  let temp = "Sample";
  function innerFunc() {
    console.log(temp);
  }
  return innerFunc;
}

let refFunc = outerFunc();
refFunc();
