const player = {
    name: 'Mango',
    xp: 100,
    level:"",
}

switch (true) {
    case player.xp >= 1000:
        player.level = "Iron";
        break;
    case player.xp >= 1001 && player.xp < 2000:
        player.level ="Cooper";
        break;
    case player.xp >= 2001 && player.xp < 5000:
        player.level = "Silver";
        break;
    case player.xp >= 5001 && player.xp < 7000:
        player.level = "Gold";
        break;
    case player.xp >= 7001 && player.xp < 8000:
        player.level = "Platinum";
        break;
    case player.xp >= 8001 && player.xp < 9000:
        player.level = "Ascending";
        break;
    case player.xp >= 9001 && player.xp < 10000:
        player.level = "Immortal";
        break;
    case player.xp >= 10001 && player.xp < 5000:
        player.level = "Radiant";
        break;
    default:
        player.level = "Noob";
        break;
}

console.log(`O Herói de nome **${player.name}** está no nível de **${player.level}**`);