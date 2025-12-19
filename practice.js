function HouseKeeper(name, YearOfEcperiance,CleaningRepertoire){
    this.name = name;
    this.YearOfEcperiance = YearOfEcperiance;
    this.CleaningRepertoire = CleaningRepertoire;


}

var housekeeper1 = new HouseKeeper("mola",5,["bathroom","lobby"]);
alert(housekeeper1.CleaningRepertoire);