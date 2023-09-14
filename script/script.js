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
    const popup = ()=>{
        const popUp = document.querySelector('.popup')

        popUp.addEventListener('click', (event)=>{
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popUp.style.display = 'none';
            }
        });
    };
    popup();
})