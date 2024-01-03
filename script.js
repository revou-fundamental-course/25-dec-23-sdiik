function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function  calculateTheAreaOfTriangle() {
    var sideA = parseFloat(document.getElementById('sideA1').value);
    var sideB = parseFloat(document.getElementById('sideB1').value);

    var resultContainer = document.getElementById('result1');
    
    if (isNaN(sideA) || isNaN(sideB)) {
        resultContainer.innerText = 'Masukkan nilai yang valid untuk semua sisi';
    } else {
        var area = 0.5 * sideA * sideB;

        resultContainer.innerText = 'Luas Segitiga adalah ' + area.toFixed(2);
    }
}

function calculateThePerimeterOfTriangle() {
    var sideA = parseFloat(document.getElementById('sideA2').value);
    var sideB = parseFloat(document.getElementById('sideB2').value);
    var sideC = parseFloat(document.getElementById('sideC2').value);

    var resultContainer = document.getElementById('result2');

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        resultContainer.innerText = 'Masukkan nilai yang valid untuk semua sisi';
    } else {
        var perimeter = sideA + sideB + sideC;
        var s = perimeter / 2;
        resultContainer.innerText = 'Keliling Segitiga adalah ' + perimeter.toFixed(2)
    }
}
