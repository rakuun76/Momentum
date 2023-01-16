const imgCnt = 3;

const chosenImage = `img${Math.floor(Math.random() * imgCnt)}`;

document.body.classList.add(chosenImage);
//append 가장 뒤에 추가
//prepend 가장 앞에 추가