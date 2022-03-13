const modifyBtn = () => {
    document.getElementById('carList').innerText = 'Modify Car list'

    document.getElementById('rendoemSection').style.display = 'none';
    document.getElementById('sportsSection').style.display = 'none';
    document.getElementById('jeepSection').style.display = 'none';

    document.getElementById('modifySection').style.display = 'block';


}

const sportBtn = () => {
    document.getElementById('carList').innerText = 'Sport Car list'

    document.getElementById('rendoemSection').style.display = 'none';
    document.getElementById('modifySection').style.display = 'none';
    document.getElementById('jeepSection').style.display = 'none';

    document.getElementById('sportsSection').style.display = 'block';
}

const jeepBtn = () => {
    document.getElementById('carList').innerText = 'Jeep Car list'

    document.getElementById('rendoemSection').style.display = 'none';
    document.getElementById('modifySection').style.display = 'none';
    document.getElementById('sportsSection').style.display = 'none';

    document.getElementById('jeepSection').style.display = 'block';
}

