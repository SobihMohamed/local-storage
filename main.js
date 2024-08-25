// ? var
let allSpans = document.querySelectorAll(".buts span");
let input = document.querySelector("input");
let spanResult = document.querySelector(".results > span");

allSpans.forEach((sapn) => {
  sapn.addEventListener("click", (e) => {
    if (e.target.classList.contains("check_item")) {
      checkItem();
    }
    if (e.target.classList.contains("add_item")) {
      addItem();
    }
    if (e.target.classList.contains("delete_item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show_item")) {
      showItem();
    }
  });
});

function checkInput() {
  var inputVal = input.value;
  if (inputVal == "") {
    spanResult.innerHTML = `Please Fill The Input`;
    return false;
  }
  return inputVal;
}

function checkItem() {
  var inputVal = checkInput();
  if (inputVal) {
    if (window.localStorage.getItem(inputVal)) {
      spanResult.innerHTML = `<span>${inputVal}</span> is exist`;
    } else {
      spanResult.innerHTML = `<span>${inputVal}</span> is Not exist`;
      setTimeout(() => {
        input.value = "";
        spanResult.innerHTML = `Please Fill The Input`;
      }, 3000);
    }
  }
}

function addItem() {
  var inputVal = checkInput();
  if (inputVal) {
    localStorage.setItem(inputVal, "test");
    spanResult.innerHTML = `item <span>${inputVal}</span> is added to local storage`;
    setTimeout(() => {
      input.value = "";
      spanResult.innerHTML = `Please Fill The Input`;
    }, 3000);
  } else {
    spanResult.innerHTML = `<span>${inputVal}</span> Not Exist`;
    setTimeout(() => {
      input.value = "";
      spanResult.innerHTML = `Please Fill The Input`;
    }, 3000);
  }
}

function deleteItem() {
  var inputVal = checkInput();
  console.log(inputVal);

  if (inputVal) {
    if (localStorage.getItem(inputVal)) {
      localStorage.removeItem(`${inputVal}`);
      spanResult.innerHTML = `item <span>${inputVal}</span> is removed from local storage`;
      setTimeout(() => {
        input.value = "";
        spanResult.innerHTML = `Please Fill The Input`;
      }, 3000);
    } else {
      spanResult.innerHTML = `<span>${inputVal}</span> Not Exist`;
      setTimeout(() => {
        input.value = "";
        spanResult.innerHTML = `Please Fill The Input`;
      }, 3000);
    }
  }
}

function showItem() {
  if (localStorage.length) {
    spanResult.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      spanResult.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    spanResult.innerHTML = `Local Storage is empty`;
    setTimeout(() => {
      input.value = "";
      spanResult.innerHTML = `Please Fill The Input`;
    }, 3000);
  }
}
