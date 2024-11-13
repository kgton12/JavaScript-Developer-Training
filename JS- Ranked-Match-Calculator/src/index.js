let player = {
   points:0,
    label:"",
    victories:50,
    defeats:5,
};

player.points = getPoints(player.victories, player.defeats);

    switch (true) {
    case (player.points < 10):
        player.label = "Iron";
        break;
    case (player.points >= 11 && player.points <= 20):
        player.label = "Bronze";
        break;
    case (player.points >= 21 && player.points <= 50):
        player.label = "Silver";
        break;
    case (player.points >= 51 && player.points <= 80):
        player.label = "Gold";
        break;
    case (player.points >= 81 && player.points <= 90):
        player.label = "Diamond";
        break;
    case (player.points >= 91 && player.points <= 100):
        player.label = "Legendary";
        break;
    case (player.points >= 101):
        player.label = "Immortal";
        break;
    default:
        player.label = "Noob";
    }

    console.log(`O Herói tem de saldo de **${player.points}** está no nível de **${player.label}**`);

function getPoints(victories, defeats){

    return victories - defeats;
}