//Soal 1
console.log("SOAL 1")
class Shape {
    numSides
    sideLengths
    constructor(numSides,sideLengths) {
        this.numSides = numSides,
        this.sideLengths = sideLengths
    }
    getNumSides() {
        return this.numSides
    }
    getSideLengths() {
        return this.sideLengths
    }
    getPerimeter() {
        if (this.numSides == 0){
            let lingkaran
            lingkaran =  22/7*this.sideLengths
            return lingkaran
        }
        else if (this.numSides == 3){
            let segitiga
            segitiga = this.sideLengths*3
            return segitiga
        }
        else if (this.numSides == 4){
            let persegi
            persegi = this.sideLengths*4
            return persegi
        }
          
    }
}

class Triangle extends Shape {
    getArea() {
        let tinggi
            let luasSegi3
            tinggi = Math.sqrt((this.sideLengths**2)-(this.sideLengths/2)**2)
            luasSegi3 = (this.sideLengths*tinggi)/2
            return luasSegi3
    }
}
class Rectangle extends Shape {
    getArea() {
        let luasSegi4
        luasSegi4 = this.sideLengths**2
       return luasSegi4
    }
}
class Circle extends Shape {
    getArea() {
        let luasLingk
        luasLingk = 22/7 *((this.sideLengths/2)**2)
        return luasLingk
    }
}

const segi3 = new Shape(3,20) // 
const triangle = new Triangle(3,20)
console.log(`Bangun Datar Dengan ${segi3.getNumSides()} buah sisi`)
console.log(`Dengan panjang sisi ${segi3.getSideLengths()} cm`)
console.log(`Sehingga keliling menjadi ${segi3.getPerimeter()} cm`)
console.log(`Sehingga luas menjadi ${triangle.getArea().toFixed(2)} cm^2`)
console.log("===================================================================")
const segi4 = new Shape(4,20)
const rectangle = new Rectangle(4,20)
console.log(`Bangun Datar Dengan ${segi4.getNumSides()} buah sisi`)
console.log(`Dengan panjang sisi ${segi4.getSideLengths()} cm`)
console.log(`Sehingga keliling menjadi ${segi4.getPerimeter()} cm`)
console.log(`Sehingga luas menjadi ${rectangle.getArea()} cm^2`)
console.log("===================================================================")
const lingk = new Shape(0,56)
const lingk1 = new Circle(0,56)
console.log(`Bangun Datar Dengan Sisi ~`)
console.log(`Dengan panjang sisi ${lingk.getSideLengths()} cm`)
console.log(`Sehingga keliling menjadi ${lingk.getPerimeter()} cm`)
console.log(`Sehingga luas menjadi ${lingk1.getArea()} cm^2`)
console.log("===================================================================\n")
console.log("SOAL 2")

class Person{
    nama = ""
    nik = ""
    jenisKelamin = ""
    constructor(nama,nik,jenisKelamin){
        this.nama = nama
        this.nik = nik
        this.jenisKelamin = jenisKelamin
    }
    setNama(val){
        this.nama = val
    }
    setNik(val){
        this.nik = val
    }
    setJenisKel(val){
        this.jenisKelamin = val
    }
    getNama(){
        let nama
        nama = this.nama
    return nama
    }
    getNik(){
        let nik
        nik = this.nik
        return nik
    }
    getjenisKel(){
        let jenisKelamin
        jenisKelamin = this.jenisKelamin
        return jenisKelamin
    }
}


class Employee extends Person{
    pekerjaan = ""
    salary = ""
    setPekerjaan(pekerjaan){
        this.pekerjaan = pekerjaan
    }   
    setSalary(salary){
        this.salary = salary
    }
    getPekerjaan(){
        return this.pekerjaan
    }
    getSalary(){
        return this.salary
    }
}

class Student extends Person{
    kampus = ""
    jurusan = ""
    setKampus(kampus){
        this.kampus = kampus
    }   
    setJurusan(jurusan){
        this.jurusan = jurusan
    }
    getKampus(){
        return this.kampus
    }
    getJurusan(){
        return this.jurusan
    }
    
}

const person = new Person("Alrico","33745153541","Laki-laki")
console.log(`Nama : ${person.getNama()}`)
console.log(`Nik : ${person.getNik()}`)
console.log(`Jenis Kelamin : ${person.getjenisKel()}`)
console.log("===========================================================")
const employee = new Employee()
employee.setPekerjaan("Programmer")
employee.setSalary("Rp. 10.000.000")
console.log(`Pekerjaan ${employee.getPekerjaan()}`)
console.log(`Gaji : ${employee.getSalary()}`)
console.log("===========================================================")
const student =  new Student()
student.setKampus("Universitas Dian Nuswantoro")
student.setJurusan("TI") 
console.log(`Kampus : ${student.getKampus()}`)
console.log(`Jurusan : ${student.getJurusan()}`)