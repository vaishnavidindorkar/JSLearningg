console.log(`=============================Assignment - 01===============`);
console.log(`=============================Step - 01===============`);
class Vehicle {
    constructor(model_name, color, number, vehicle_type, average ){
        this.model_name = model_name;
        this.color =  color ;
        this.number =  number  ;
        this.vehicle_type = vehicle_type ;
        this.average = average
    }
    details(){
      console.log(`Vehicle Details is Model Name: ${this.model_name} , Color : ${this.color}
      Vehicle Type: ${this.vehicle_type}, Average: ${this.average}`);
    }
  
  }
  
  let VehicleNexon = new Vehicle("Tata-Nexon" , "Black"  ,"MH-29 , X-3211" , "EV" ,"17-24 km/l combined");
  
  let VehiclePunch = new Vehicle("Tata-Punch" , "White"  ,"MH-12 , CD-32" , "Disel" ,"17-24 km/l combined");
  
  let VehicleSafari = new Vehicle("Tata-Safari" , "Red"  ,"MH-14 , X-11" , "Petrol" ,"17-24 km/l combined");
  
  let VehicleHarrier = new Vehicle("Tata-Harrier" , "Grey"  ,"MH-31 , Y-101" , "CNG" ,"17-24 km/l combined");
  
 
  
  const array = [VehicleNexon, VehiclePunch, VehicleSafari, VehicleHarrier];
  console.log(`Traversing array`);
  for (const Vehicle of array) {
    Vehicle.details();
  }

  console.log(`=============================Step - 02===============`);

  class college{
    constructor(collgege_name,college_address,college_city,collge_pincode){
    this.collgege_name = collgege_name;
    this.college_address = college_address;
    this.college_city = college_city;
    this.collge_pincode = collge_pincode
  }
  display(){
    console.log(`College details : collge name : ${this.collgege_name} , 
    collge address : ${this.college_address} , college city : ${this.college_city} , pincode : ${this.collge_pincode}`);
  }

  
}
let collegeDetails = new college("JDIET" ,"Lohara MIDC","Yavatmal",441052);
let collegeDetails2 = new college("Amolakchand Mahavidyalay" ,"Bajoria Nagar" ,"Yavatmal" ,4411052);
let collegeDetails3 = new college("Government Polytechnic" ,"Pimpalgao" ,"Yavatmal" , 4411052);

const arrayCollge = [collegeDetails , collegeDetails2 , collegeDetails3]


console.log(`Traverse of collgege`);
for (const college of arrayCollge) {
    college.display();
}


console.log(`=============================Step - 03===============`);

function traverseObject(collegeDetails)
 {


for (const [key, value] of Object.entries(arrayCollge)) {
  console.log(key, value);
}
 }
 traverseObject(collegeDetails);
