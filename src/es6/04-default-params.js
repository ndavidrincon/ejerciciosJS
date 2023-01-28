// Parametros por defecto

function newUser (name, ege, country) {
    var name = name || "oscar";
    var ege = ege || 35;
    var country = country || "MX";
    console.log(name, ege, country);
}

newUser();
newUser("juan", 25, "colombia");

function newAdmin (name = "oscar", ege = 32, country = "colom") {
    console.log(name, ege, country);
}

newAdmin();
newAdmin("ana",43,"peru");