CREATE TABLE products(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  productName TEXT,
  productPrice TEXT,
  description TEXT,
  category TEXT,
  color TEXT,
  image TEXT,
  urlSlug TEXT UNIQUE
);

INSERT INTO products (
  productName,
  productPrice,
  description,
  category,
  color,
  image,
  urlSlug
) VALUES (
    'Kyan Flow',
    '250',
    'Den eleganta vardagsflaskan för dig på språng. Kyan Flow kombinerar en minimalistisk design med avancerad isolering som håller din dryck kall i upp till 24 timmar eller varm i 12 timmar. Tillverkad av återvunnet rostfritt stål och med en läckagesäker kork – perfekt för både pendling och äventyr.',
    'Mugs',
    'Blue',
    '/img/kyanFlow.jpg',
    'kyan-flow'
);
INSERT INTO products (
  productName,
  productPrice,
  description,
  category,
  color,
  image,
  urlSlug
) VALUES (
    'Shine Kyan',
    '250',
    'En stilren glasflaska för en renare och fräschare drickupplevelse. Pure Kyan är omgiven av ett skyddande silikonhölje i trendiga färger, vilket gör den både snygg och praktisk. 100% BPA-fri och designad med en bred öppning för smidig påfyllning och rengöring.',
    'Mugs',
    'Yellow',
    '/img/ShineKyan.jpg',
    'shine-kyan'
);
INSERT INTO products (
  productName,
  productPrice,
  description,
  category,
  color,
  image,
  urlSlug
) VALUES (
    'Kyan Berry',
    '250',
    'Din ultimata vattenflaska för ett aktivt liv. Kyan Go är lätt, tålig och utrustad med en smart bärrem för maximal bekvämlighet. Denna flaska är gjord av hållbar Tritan-plast och har en innovativ pip för enkel hydrering under träningen. Finns i flera färger som speglar din stil.',
    'Mugs',
    'Pink',
    '/img/kyanBerry.jpg',
    'kyan-berry'
);