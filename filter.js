app.filter('customfilter',function(){
    return function (personsArray,gender) {
        console.log(gender);
        if(gender==undefined){
            gender="male"
        }
        let seniorCitizen = personsArray.filter((person) =>person.gender==gender)
        return seniorCitizen;
    };
})
