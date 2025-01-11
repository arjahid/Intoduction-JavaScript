function Person(first, last, age, email) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.email = email;
    this.fulldetails=()=>{
        return this.firstName+" "+this.lastName;
    }
}

const man1 = new Person("Jahid", "Hasan", 23, "jhjahidhasanar@gmail.com");
const man2 = new Person("Asha ","Mony",22,"ashamony@gmail.com")
Person.nationality="Bangladeshi";
console.log(man1.fulldetails());
console.log(man2);
