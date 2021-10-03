var tanya = true;
while (tanya){
// Pilihan Player
var p = prompt("Silahkan Pilih \n (contoh : Jempol, Telunjuk, Kelingking)")
// Pilihan Komputer

// bilangan random
var comp = Math.random();
if (comp < 0.34 ) {
    comp = "Jempol";
} else if (comp >= 0.34 && comp < 0.67) {
    comp = " Telunjuk";
} else{
    comp = " Kelingking";
}

var hasil = ''
// alur
if ( p == comp ){
    hasil = 'SERI!';
} else if ( p == "Jempol"){
    hasil = ( comp == "Telunjuk" ) ? "MENANG!" : "KALAH!";
} else if ( p == "Telunjuk"){
    hasil = ( comp == "Jempol" ) ? "KALAH!" : "MENANG!";
} else if ( p == "Kelingking"){
    hasil = ( comp == "Telunjuk" ) ? "KALAH!" : "MENANG!";
} else {
    hasil = "ISI YANG BENER JINGS"
}

//  Hasilnya
alert (' KAMU MEMILIH : ' + p +  ' \n KOMPUTER MEMILIH : ' + comp + ' \n HASILNYA :  KAMU ' + hasil) 
tanya= confirm ( " LAGI GAK ?");
} 
alert (" THANKS DAH MAU MAIN :)")