var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {


    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    if (tabname === 'skills')
        document.getElementById(tabname).classList.add('active-tab');
    else if (tabname === 'experience') {
        document.getElementById(tabname).classList.add('active-tab');
        document.getElementById(tabname).classList.add('side1');
    } else if (tabname === 'education') {
        document.getElementById(tabname).classList.add('active-tab');
        document.getElementById(tabname).classList.add('side2');
    }

}