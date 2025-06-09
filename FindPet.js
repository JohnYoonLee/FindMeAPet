const alldogs = [
    {
        dogname: "Dallas",
        breed: "Shorthair/MixTerrier, Pit Bull/Mix",
        age: "3"
},
{
    dogname: "Luna Lovegood",
    breed: "Terrier, American Pit Bull/Mix",
    age: "4"
},
{
    dogname: "Marley",
    breed: "Retriever, Labrador/Mix",
    age: "9"
},
{
    dogname: "Cooper",
    breed: "Pit Bull",
    age: "3"
},
{
    dogname: "Piper",
    breed: "Terrier, Pit Bull/Mix",
    age: "3"
},
{
    dogname: "Ace",
    breed: "Shepherd/Retriever",
    age: "2"
},
{
    dogname: "Ashton",
    breed: "Terrier, American Pit Bull/Mix",
    age: "3"
},
{
    dogname: "Axel",
    breed: "Terrier, American Pit Bull/Mix",
    age: "2"
},
{
    dogname: "Bama",
    breed: "Siberian Husky/Mix",
    age: "6"
},
{
    dogname: "Bane",
    breed: "Rottweiler/Mix",
    age: "9"
},
{
    dogname: "Bea",
    breed: "Terrier, American Pit Bull/Mix",
    age: "2"
},
]

const showAge = (PetArray) => {
    let str = ""
    let PetTime = document.querySelector("#PetAge").value;
    PetTime =  parseInt(PetTime) - 1;
    console.log(PetTime);
    
    alldogs.forEach((alldogs) => {    
        if(PetTime >= parseInt(alldogs.age))
            str += alldogs.dogname + ", ";

    });
let doglist = document.querySelector(".selectedPetAge")
doglist.textContent = str
}

showAge(alldogs)