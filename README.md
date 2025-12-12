# Villámkártyák - Frontend feladat

A feladatotok a design mappában található képek alapján, és a public mappában található json felhasználásával elkészíteni a flashcards alkalmazás frontend részét. Egyelőre a json fájllal kell működnie a programnak.
A kártyák átfordításkor (tehát ha rákattintunk a kártyára amikor kérdés van rajta) animálva kell átfordulnia, amit az alábbi linken megnézhettek hogyan kell:

[W3Schools anyag](https://www.w3schools.com/howto/howto_css_flip_card.asp)


A kártya színe a kérdés nehézségétől függ (a nehézség pedig később attól fog függeni, hogy hányszor rontották el):

- pozitív szám esetén zöld (--green)
- 0 esetén fehér (white)
- nehatív szám esetén piros (--red)

Ugyan ez vonatkozik az átfordítás után a fejlécben a színre (ahol megjelenik a nehézség pontszám is).

## Az oldalon használt színek

```css
--green: #66CB92;
--red: #FF9396;

--bg-color-1: #FC00FF;
--bg-color-2: #00DBDE;
```

## Font-awesome ikonok

```jsx
// Pipa
<i className="fa-regular fa-circle-check"></i>

// X
<i className="fa-regular fa-circle-xmark"></i>

// Plusz jel
<i className="fa-solid fa-plus"></i>
```

## Új kártya hozzáadása

Az új kártya hozzáadása lapnak egyelőre nem kell még működnie!