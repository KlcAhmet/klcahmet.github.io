var headerDesc = document.getElementById("header-desc");


window.onload = function() {
    descparagraph();
};


function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function descparagraph() {

    while (true) {
        for (var i = 0; i < headerDesc.children.length; i++) {
            headerDesc.children[i].classList.add("spananimation");
            await sleep(1000);
            headerDesc.children[i].classList.remove("spananimation");
        }
    }
};