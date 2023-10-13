async function bubble() {
    console.log('BubbleSort');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)) {
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#4aed88';
            ele[j+1].style.background = '#4aed88';

        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortBtn = document.querySelector(".bubbleSort");
bubSortBtn.addEventListener('click', async function() {
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await bubble();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtn();
})