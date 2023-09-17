window.addEventListener('DOMContentLoaded', function (){
    'use strict';

    //Tabs
    const tabs = ()=>{
        const tabHeader = document.querySelector('.service-header'),
            tabs = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index)=>{
            for (let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tabs[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabs[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event)=>{
            let target = event.target;
            target = target.closest('.service-header-tab');
            if(target){
                tabs.forEach((item, i)=>{
                    if (item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    //Popup
    let userName = ''
    let clientName = ''
    const popup = ()=>{
        const popUp = document.querySelector('.popup')

        popUp.addEventListener('click', (event)=>{
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popUp.style.display = 'none';
                userName = document.querySelector('.user_name').value
                clientName = document.querySelector('.client_name').value
            }
            console.log(userName, clientName)
        });
    };
    popup();

    //Performance
    const performance = () => {

        const step_2 = document.querySelector('.step_2')
        const step_2Y = document.getElementById('step_2-Y')
        const step_2N = document.getElementById('step_2-N')
        const step_3 = document.querySelector('.step_3')
        const step_3Y = document.getElementById('step_3-Y')
        const step_3N = document.getElementById('step_3-N')
        const step_4 = document.querySelector('.step_4')
        const step_4Y = document.getElementById('step_4-Y')
        const step_4N = document.getElementById('step_4-N')
        const step_5 = document.querySelector('.step_5')
        const step_5Y = document.getElementById('step_5-Y')
        const step_5N = document.getElementById('step_5-N')
        const step_6 = document.querySelector('.step_6')
        const step_6Y = document.getElementById('step_6-Y')
        const step_6N = document.getElementById('step_6-N')
        const step_7 = document.querySelector('.step_7')

        const closeAnotherSteps = (index) => {
            let radioArray = [...document.querySelectorAll('.inputRadio')]
            let newArray = radioArray.filter((el, i) => i + 1 > index)
            newArray.forEach((el) => {
                el.checked = false
            })
            let tableRow = [...document.querySelectorAll('.table-row')]
            let newTableArray = tableRow.filter((el, i) => i > index / 2)
            newTableArray.forEach((el) => {
                el.classList.add('d-none')
            })
        }

        /*const div = document.createElement('div')
        div.classList.add('table-row', 'step_1')
        const table = document.querySelector('.table')
        table.append(div)
        let step_1text = `<div class="table-row step_1">
                        <div class="table-item theme-column">Соединение состоялось</div>
                        <div class="table-item phrase-column">Здравствуйте, меня зовут ${userName}, я представляю
                            Тинькофф.
                            Я разговария с ${clientName}?
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <input class="inputRadio" type="radio" name="step_1" id="step_1-Y"> Yes
                                <input class="inputRadio" type="radio" name="step_1" id="step_1-N"> No
                            </label>
                        </div>
                    </div>`
        div.innerHTML = step_1text*/

        const step_1Y = document.getElementById('step_1-Y')
        const step_1N = document.getElementById('step_1-N')

        step_1Y.addEventListener('input', () => {
            step_2.classList.remove('d-none')
        })
        step_1N.addEventListener('input', () => {
            closeAnotherSteps(2)
        })
        step_2Y.addEventListener('input', () => {
            step_3.classList.remove('d-none')
        })
        step_2N.addEventListener('input', () => {
            closeAnotherSteps(4)
        })
        step_3Y.addEventListener('input', () => {
            step_4.classList.remove('d-none')
        })
        step_3N.addEventListener('input', () => {
            closeAnotherSteps(6)
        })
        step_4Y.addEventListener('input', () => {
            step_5.classList.remove('d-none')
        })
        step_4N.addEventListener('input', () => {
            closeAnotherSteps(8)
        })
        step_5Y.addEventListener('input', () => {
            step_6.classList.remove('d-none')
        })
        step_5N.addEventListener('input', () => {
            closeAnotherSteps(10)
        })
        step_6Y.addEventListener('input', () => {
            step_7.classList.remove('d-none')
        })
        step_6N.addEventListener('input', () => {
            step_7.classList.add('d-none')
        })

    }
    performance()
})