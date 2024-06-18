var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

document.getElementById('depression-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const frequency = document.querySelector('input[name="frequency"]:checked').value;
    let percentage = 0;
    let description = '';

    // Menentukan persentase tingkat depresi berdasarkan usia, jenis kelamin, dan frekuensi merasa sendiri
    if (gender === 'male') {
        if (age < 18) {
            percentage = 10;
            description = 'Tingkat depresi pada laki-laki di bawah usia 18 tahun relatif rendah.';
        } else if (age < 40) {
            percentage = 20;
            description = 'Tingkat depresi pada laki-laki usia 18-40 tahun cukup tinggi.';
        } else {
            percentage = 15;
            description = 'Tingkat depresi pada laki-laki di atas usia 40 tahun moderat.';
        }
    } else if (gender === 'female') {
        if (age < 18) {
            percentage = 15;
            description = 'Tingkat depresi pada perempuan di bawah usia 18 tahun moderat.';
        } else if (age < 40) {
            percentage = 25;
            description = 'Tingkat depresi pada perempuan usia 18-40 tahun cukup tinggi.';
        } else {
            percentage = 20;
            description = 'Tingkat depresi pada perempuan di atas usia 40 tahun moderat.';
        }
    } else {
        percentage = 20;
        description = 'Tingkat depresi pada individu dengan jenis kelamin lainnya adalah moderat.';
    }

    // Menambahkan faktor frekuensi merasa sendiri ke dalam persentase
    switch (frequency) {
        case 'never':
            percentage *= 0.5;
            description += ' Anda jarang merasa sendiri, sehingga risiko depresi lebih rendah.';
            break;
        case 'rarely':
            percentage *= 0.75;
            description += ' Anda jarang merasa sendiri, sehingga risiko depresi sedikit lebih rendah.';
            break;
        case 'sometimes':
            description += ' Anda kadang-kadang merasa sendiri, sehingga risiko depresi normal.';
            break;
        case 'often':
            percentage *= 1.25;
            description += ' Anda sering merasa sendiri, sehingga risiko depresi lebih tinggi.';
            break;
        case 'always':
            percentage *= 1.5;
            description += ' Anda selalu merasa sendiri, sehingga risiko depresi sangat tinggi.';
            break;
    }

    document.getElementById('percentage').innerText = `Persentase tingkat depresi: ${percentage.toFixed(2)}%`;
    document.getElementById('description').innerText = description;
    document.getElementById('result').classList.remove('hidden');
});

