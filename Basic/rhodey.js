// Membuat function hitung bmi
bmi = (bb, tb) => {
    const a = bb / Math.pow((tb / 100), 2);
    var s;
    if (a < 18.5) {
        return s = "Kurus bangetlu";
    } else if (a >= 18.5 && a <= 24.9) {
        return s = "Normal (ideal)";
    } else if (a >= 25 && a <= 29.9) {
        return s = "Kelebihan Berat Badan";
    } else {
        return s = "Kegemukan (Obesitas)";
    }
}

// const print = "1.Ukuran BMI " + bmi(55, 170);
// console.log(print);
document.getElementById('bmi').innerHTML = "3. BMI Rhodey : " + bmi(90, 170);