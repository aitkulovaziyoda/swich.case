var forDays = prompt("Mashina turlarini kiriting!")

switch(forDays){
    case"Cobalt":
    case"Malibu":
    case"Damas":
    case"Spark":
    document.write("Bu mashinalar O'zbekistonda ishlab chiqarilgan!");
    break
    case"BMW":
    case"OPEL":
    case"PORSCHE":
    case"BUGATTI":
    document.write("Bu mashinalar Germaniyada ishlab chiqarilgan!");
    break
    default:
    document.write("Siz boshqa mamlakat mashinasidasiz!");

}