import 'package:pertemuan2/pertemuan2.dart' as pertemuan2;

void main() {
  String nama="Tasya";//String adalah tipe data untuk teks
  int umur=20;// int adalah tipe data untuk bilangan bulat
  double ipk=3.5;// double adalah tipe data untuk bilangan desimal
  bool statusMahasiswa=true;// bool adalah tipe data untuk nilai benar atau salah

  //type inference
  var alamat="Jalan Merdeka No. 10";// tipe data akan menyesuaikan dengan nilai yang diberikan
  print("Nama: $nama");
  print("Umur: $umur tahun");
  print("IPK: $ipk");
  print("alamat: $alamat");

    //operator
  int a=15;
  int b=4;
  //Operator Aritmatika
  print("Penjumlahan :${a+b}");  
  print("Modul(Sisa Bagi) :${a%b}");
  //Operator Perbandingan
  print("Apakah a sama dengan b? ${a==b}");
  //Logika
  bool hujan=true;
  bool bawaPayung=false;
  print("Apakah akan basah ?${hujan &&!bawaPayung}");

  int nilaiujian=85;
  String grade;
  if(nilaiujian>=80){grade="A";}
  else if(nilaiujian>=70){grade="B";}  
  else if(nilaiujian>=60){grade="C";}
  else{grade="D";}  
  print("Nilai Anda:$nilaiujian, Grade: $grade");  

  for(int i=1;i<=5;i++){
    print("Perulangan ke-$i");
  }

  List<String>buah=["Apel","Jeruk","Mangga"];
  int index=0;

  while(index<buah.length){
    print("Buah: ${buah[index]}");
    index++;
  } 
//   void bubbleSort(List<int> arr) {
//   int n = arr.length;
//   bool swapped;
//   do {
//     swapped = false;
//     for (int i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // Menukar elemen jika mereka tidak dalam urutan yang benar
//         int temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// void main() {
//   List<int> angka = [64, 34, 25, 12, 22, 11, 90];

//   print("Sebelum sorting: $angka");

//   bubbleSort(angka);

//   print("Setelah sorting: $angka");
// }
//Untuk Mengecek data type
var x=10;
print(x.runtimeType);//menampilkan tipe data dari variabel x

var bil=5;


}