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
    const popup = () => {
        const popUp = document.querySelector('.popup')

        popUp.addEventListener('click', (event)=>{
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popUp.style.display = 'none';
                userName = document.querySelector('.user_name').value
                clientName = document.querySelector('.client_name').value
                performance(userName, clientName)
            }
        });
    };
    popup();

    //Performance
    const performance = (userName, clientName) => {

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
        };
        const table = document.querySelector('.table')

        function addStep1(){
            const step1_div = document.createElement('div')
            step1_div.classList.add('table-row', 'step_1')
            table.append(step1_div)
            step1_div.innerHTML = `<div class="table-item theme-column">Соединение состоялось</div>
                        <div class="table-item phrase-column">Здравствуйте, меня зовут ${userName}, я представляю
                            Тинькофф.
                            Я разговариваю с ${clientName}?
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_1" id="step_1-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_1" id="step_1-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep1();

        /*function addStep11() {
            const step11_div = document.createElement('div')
            step11_div.classList.add('table-row', 'step_11', 'd-none')
            table.append(step11_div)
            step11_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Скажите, вы знакомы с ${clientName}?</div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_11" id="step_11-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_11" id="step_11-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep11();

        function addStep12() {
            const step12_div = document.createElement('div')
            step12_div.classList.add('table-row', 'step_12', 'd-none')
            table.append(step12_div)
            step12_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Приношу извинения. Всего доброго.</div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_12" id="step_12-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_12" id="step_12-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep12();*/

        function addStep2() {
            const step2_div = document.createElement('div')
            step2_div.classList.add('table-row', 'step_2', 'd-none')
            table.append(step2_div)
            step2_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Очень приятно ${clientName}. Вы готовы уделить мне 2-3минуты
                            Вашего внимания и ответить на пару вопросов?
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_2" id="step_2-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_2" id="step_2-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep2();

        /*function addStep21() {
            const step21_div = document.createElement('div')
            step21_div.classList.add('table-row', 'step_21', 'd-none')
            table.append(step21_div)
            step21_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Подскажите, когда можно будет перезвонить, 
                        чтобы поговорить с ${clientName}?</div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_21" id="step_21-Y">Сообщает время</label>
                                <label><input class="inputRadio" type="radio" name="step_21" id="step_21-N">не сообщает время</label>
                            </label>
                        </div>`
        }
        addStep21();*/

        function addStep3() {
            const step3_div = document.createElement('div')
            step3_div.classList.add('table-row', 'step_3', 'd-none')
            table.append(step3_div)
            step3_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">${clientName}, спасибо, что Вы являетесь нашим клиентом.
                            Позвольте сообщить, что мы подключаем Клиентам особую программу страхования,
                            которая обеспечит Вам надежную финансовую защиту при потере трудоспособности
                            в результате несчастного случая, а также от потери работы. <br>
                            При наступлении страхового случая по рискам "Ухода из жизни" в результате
                            НС и "Инвалидность 1, 2 группы" в результате НС, размер страховой выплаты составит 160%
                            от задолженности на дату наступления страхового случая.
                            <span>Например:</span> если задолженность составляла 100 000 рублей, то страховая выплата
                            составит 160 000 рублей.
                            <br>
                            <br>При наступлении страхового случая по риску "Потери работы", задолженность в пределах
                            120 000 рублей будет погашена за счет страховой компании. <br>
                            Скажите, вы готовы защитить себя от непредвиденных жизненных ситуаций?
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_3" id="step_3-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_3" id="step_3-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep3();

        function addStep4() {
            const step4_div = document.createElement('div')
            step4_div.classList.add('table-row', 'step_4', 'd-none')
            table.append(step4_div)
            step4_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">${clientName}, плата за услугу составляет всего 0,89% от суммы
                            задолженновсти, на момент формирования счет-выписки. Например, в случае наличия
                            задолженности в 1000 рублей плата за программу будет составлять всего 8 рублей 90 копеек
                            в месяц. При этом, в случае, если задолженность отсутствует,
                            то плата за программу не взимается.
                            <br>
                            Согласитесь, это выгодное предложение?
                            <br>
                            <br>
                            <span>ВАЖНО! Если клиент не согласен по критерию цены, предлагайте льготную программу</span>
                            <br>
                            <br>${clientName}, в таком случае я могу предложить вам эту страховую программу,
                            но на льготных условиях:
                            <br>В течение 90 дней после подключения плата за услугу "Страхование задолженности"
                            не будет списываться, и Вы сможете оценить все достоинства услуги совершенно бесплатно.
                            В дальнейшем плата за нее составит всего 0,89% от суммы задолженности.
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_4" id="step_4-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_4" id="step_4-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep4();

        function addStep5() {
            const step5_div = document.createElement('div')
            step5_div.classList.add('table-row', 'step_5', 'd-none')
            table.append(step5_div)
            step5_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Обращаю Ваше внимание на то, что участникам программы
                            не могут быть лица, старше 75 лет и страдающие психическими заболеваниями.
                            <br>
                            С этими условиями согласны?
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_5" id="step_5-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_5" id="step_5-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep5();

        function addStep6() {
            const step6_div = document.createElement('div')
            step6_div.classList.add('table-row', 'step_6', 'd-none')
            table.append(step6_div)
            step6_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">В таком случае Вы будете застрахованы от рисков
                            получения инвалидности 1,2 группы в результате НС, ухода из жизни в результате НС,
                            а также от потери работы. Инвалидность в результате болезни в покрытие не входит.
                            <br>
                            <br>
                            Скажите, Вы согласны стать участником этой программы?
                            <br>
                            <br>
                            Важно! Если клиент сообщает, что ему ранее была присвоена группа инвалидности,
                            то необходимо прояснить, что в этом случае программа будет покрывать
                            только риск ухода из жизни в результате НС.
                        </div>
                        <div class="table-item answer-column">
                            <label>
                                <label><input class="inputRadio" type="radio" name="step_6" id="step_6-Y">Да</label>
                                <label><input class="inputRadio" type="radio" name="step_6" id="step_6-N">Нет</label>
                            </label>
                        </div>`
        }
        addStep6();

        function addStep7(){
            const step7_div = document.createElement('div')
            step7_div.classList.add('table-row', 'step_7', 'd-none')
            table.append(step7_div)
            step7_div.innerHTML = `<div class="table-item theme-column"></div>
                        <div class="table-item phrase-column">Плата за страхование будет списываться с вашей карты
                            ежемесячно. Программа начнет действовать с момента формирования следующей счет-выписки.
                            В случае нежелания далее получать страховую защиту, Вы можете в любое время
                            отключить её в мобильном приложении или личном кабинете на сайте www.tinkoff.ru.
                            Благодарю вас. Услуга страхования успешно подключена. Всего доброго, до свидания.
                        </div>
                        <div class="table-item answer-column"></div>`
        }
        addStep7();

        const step_1Y = document.getElementById('step_1-Y')
        const step_1N = document.getElementById('step_1-N')
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

        step_1Y.addEventListener('input', () => {
            step_2.classList.remove('d-none')
        })
        step_1N.addEventListener('input', () => {
            closeAnotherSteps(2)
        });
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
})