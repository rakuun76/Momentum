const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
/*현재 form에는 두 개의 input이 존재
둘 중 먼저 나온 것이 loginInput에 저장됨*/
const greeting = document.querySelector("#greeting");

//string을 반복해서 사용할 때는 변수에 담기
//string만 담은 변수는 대문자로 표기한다
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //브라우저의 기본 동작을 막고 우리가 하고 싶은 동작 수행
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; //"Hello " + username도 가능
    //"Hello ${username}"라고 하면 이대로 출력됨. 백틱 기호 사용할 것
    //변수를 적용하기 위해 위와 같은 방법으로
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}