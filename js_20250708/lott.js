
// 排序前
let sortBefore = document.getElementById("sortBefore");
//排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNum = document.getElementById("secNum");

// 威力彩
// ===for迴圈===
function lott1() {
    // 建立號碼的空陣列
    let lott = [];
    // 第一個號碼
    let lottNo = Math.floor(Math.random() * 38) + 1;
    lott.push(lottNo);

    // 第二個號碼之後，每個號碼都要檢查是否重複
    // 因為還有5個號碼
    for (let i = 1; i <= 5; i++) {
        // 亂數取號碼
        lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  //沒有重覆
            lott.push(lottNo);                 //增加號碼到陣列中
        } else {
            i--;    //當號碼重複時，這次的執行次數不算，要再跑一遍
        }
    }
    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    // 第二區:1~8取1個
    secNum.textContent = "第二區號碼" + (Math.floor(Math.random() * 8) + 1)
}


// ==while迴圈==
let count = 1
while (lott.length < 6) {
    // 檢查是否有6個號碼
    if (lott.length == 6) {
        break;
    }
    // 亂數取號碼
    let lottNo = Math.floor(Math.random() * 38) + 1;
    // 檢查是否重複
    if (lott.includes(lottNo) == false) {  //沒有重覆
        lott.push(lottNo);                 //增加號碼到陣列中
        count++;
    }
}
// 大樂透
function lott2() {
    // 第一區:1~49取6個
    // 建立存放號碼的空陣列
    let lott = [];

    // while迴圈
    while (1) {
        // 檢查是否有6個號碼
        if (lott.length == 7) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  //沒有重覆
            lott.push(lottNo);                 //增加號碼到陣列中
            count++;
        }
    }

    // 取出陣列最後一個值後，並移除
    secNum.textContent = "第二區號碼:" + lott.pop();
    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

}

// 今彩539
function lott3() {
    // 第一區:1~39取5個
    // 建立存放號碼的空陣列
    let lott = [];

    // while迴圈
    while (1) {
        // 檢查是否有5個號碼
        if (lott.length == 5) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 39) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  //沒有重覆
            lott.push(lottNo);                 //增加號碼到陣列中
            count++;
        }
    }

    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    // 今彩沒有第二區，所以清除
    secNum.textContent = "";

}
