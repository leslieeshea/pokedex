const test = QUnit.test;

QUnit.module('make pokedex');

const pokedex = {
    'pokemon': 'Bulbasaur',
    'color_1': '#78C850',
    'color_2': '#A040A0',
    'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    'hp': 45,
    'attack': 49,
    'defense': 49
};

function makePokedexTemplate(pokedex) {
    const html = /*html*/
    `<li style="background-color: ${pokedex.color_1}">
        <h3>${pokedex.pokemon}<div class="type_2" style="background-color: ${pokedex.color_2}"></div></h3>
        <img src="${pokedex.url_image}">
        <p class="stats">
            <span>HP: ${pokedex.hp} | </span>
            <span>A: ${pokedex.attack} | </span>
            <span>D: ${pokedex.defense}</span>
        </p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make pokedex template', assert => {
    const result = makePokedexTemplate(pokedex);
    const expected = /*html*/
    `<li style="background-color: #78C850">
        <h3>Bulbasaur<div class="type_2" style="background-color: #A040A0"></div></h3>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
        <p class="stats">
            <span>HP: 45 | </span>
            <span>A: 49 | </span>
            <span>D: 49</span>
        </p>
    </li>`;

    assert.htmlEqual(result, expected);
});