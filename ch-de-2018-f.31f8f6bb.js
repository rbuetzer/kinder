// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/ch-de-2018-f.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.names = void 0;
var names = ["Emma", "Mia", "Sofia", "Lea", "Elena", "Emilia", "Mila", "Anna", "Laura", "Lena", "Lara", "Lina", "Lia", "Nora", "Sophia", "Julia", "Nina", "Sara", "Giulia", "Ella", "Elin", "Alina", "Olivia", "Elina", "Leonie", "Luana", "Alice", "Elisa", "Eva", "Valentina", "Sophie", "Amelia", "Livia", "Chiara", "Emily", "Alessia", "Maria", "Amélie", "Noemi", "Aurora", "Jana", "Yara", "Lynn", "Hanna", "Lisa", "Malea", "Zoé", "Victoria", "Lorena", "Melina", "Amelie", "Alea", "Charlotte", "Luisa", "Ronja", "Fiona", "Selina", "Mara", "Chloé", "Luna", "Melissa", "Jara", "Clara", "Alicia", "Zoe", "Leana", "Lou", "Hannah", "Ava", "Amina", "Julie", "Juna", "Louise", "Sarah", "Aline", "Stella", "Diana", "Léa", "Maya", "Helena", "Amy", "Malia", "Aurelia", "Elea", "Anouk", "Camille", "Anaïs", "Louisa", "Alma", "Liana", "Ariana", "Lucie", "Noelia", "Paula", "Eline", "Johanna", "Ladina", "Leandra", "Sina", "Linda", "Mira", "Ela", "Jael", "Mina", "Lana", "Jade", "Leonor", "Alena", "Alissa", "Ellie", "Lilly", "Elise", "Ema", "Kiara", "Klea", "Malin", "Mathilde", "Matilde", "Tara", "Liv", "Lucy", "Marie", "Yuna", "Ana", "Milena", "Naomi", "Valeria", "Eliana", "Lily", "Arya", "Isabella", "Samira", "Amanda", "Ayla", "Emely", "Emilie", "Hana", "Iris", "Matilda", "Greta", "Angelina", "Enya", "Lya", "Vanessa", "Aylin", "Carla", "Vivienne", "Liara", "Alexandra", "Bianca", "Leni", "Yael", "Amalia", "Leila", "Leona", "Anja", "Juliette", "Soraya", "Amira", "Estelle", "Medina", "Ida", "Manon", "Aria", "Elsa", "Emelie", "Inara", "Inaya", "Malina", "Rose", "Adriana", "Joana", "Larissa", "Leyla", "Léna", "Léonie", "Tenzin", "Anastasia", "Charlie", "Leya", "Delia", "Layla", "Nayla", "Alyssa", "Anina", "Isabelle", "Martina", "Viola", "Erina", "Ilaria", "Jasmin", "Tiara", "Gianna", "Mayla", "Maëlle", "Sienna", "Dua", "Inès", "Kim", "Margaux", "Marta", "Céline", "Eleni", "Marina", "Romina", "Timea", "Annika", "Klara", "Laila", "Maeva", "Eleonora", "Gioia", "Liya", "Maja", "Noa", "Norah", "Carolina", "Daria", "Lenia", "Noémie", "Tuana", "Alisa", "Flurina", "Frida", "Inês", "Rahel", "Aya", "Ayana", "Finja", "Melanie", "Mona", "Neva", "Nicole", "Romy", "Sarina", "Selma", "Eliza", "Gaia", "Jessica", "Kyara", "Leticia", "Mathilda", "Melisa", "Michelle", "Serena", "Svea", "Thea", "Arianna", "Beatriz", "Chloe", "Elif", "Elodie", "Josephine", "Malou", "Paulina", "Tina", "Aliya", "Anisa", "Elisabeth", "Gabriela", "Iva", "Kayla", "Larina", "Lejla", "Lola", "Lotta", "Rajana", "Zoey", "Ada", "Cataleya", "Eliane", "Isabel", "Jaël", "Jeanne", "Adèle", "Antonia", "Joy", "Lila", "Pauline", "Rebecca", "Rosa", "Svenja", "Théa", "Valerie", "Vera", "Aisha", "Ajla", "Alexia", "Ambra", "Ambre", "Claire", "Eloïse", "Liah", "Maila", "Tessa", "Thalia", "Agathe", "Amara", "Camila", "Giorgia", "Miriam", "Teodora", "Xenia", "Alix", "Anastasija", "Andrina", "Kaia", "Lyana", "Melody", "Nia", "Rona", "Runa", "Seraina", "Viktoria", "Yasmine", "Abigail", "Aleyna", "Alia", "Dea", "Joséphine", "Lavinia", "Lenja", "Nadine", "Nea", "Nela", "Nuria", "Selena", "Élise", "Alba", "Alissia", "Aliyah", "Amandine", "Amra", "Dilara", "Eileen", "Lilia", "Nerea", "Salome", "Tamara", "Yasmin", "Zélie", "Amélia", "Anita", "Elyne", "Hailey", "Ina", "Janina", "Juliana", "Kelly", "Leia", "Lijana", "Marla", "Sofija", "Talia", "Alexa", "Beatrice", "Cléa", "Clémence", "Elia", "Gloria", "Hira", "Ines", "Irina", "Ivy", "Jolina", "Joline", "Linnea", "Magdalena", "Norina", "Nour", "Selin", "Alya", "Amaya", "Anika", "Charline", "Célia", "Dina", "Elly", "Flavia", "Ilenia", "Ilona", "Kiana", "Kira", "Letizia", "Linn", "Luena", "Nova", "Noée", "Siana", "Suela", "Alana", "Annina", "Cloé", "Esma", "Freya", "Juno", "Kristina", "Lucia", "Margot", "Marion", "Mya", "Nayara", "Nejla", "Neyla", "Nila", "Océane", "Samantha", "Simona", "Tiana", "Aaliyah", "Angela", "Arina", "Asja", "Cecilia", "Celine", "Dalia", "Dana", "Keyla", "Louane", "Marlene", "Moana", "Nadia", "Naemi", "Nala", "Natalia", "Nelia", "Ruby", "Adea", "Alva", "Benedita", "Ellen", "Evelyn", "Flora", "Ginevra", "Giuliana", "Meret", "Nathalie", "Naya", "Pia", "Rita", "Roxane", "Salomé", "Tilda", "Aurela", "Azra", "Camilla", "Clea", "Era", "Erin", "Fabienne", "Isra", "Jasmine", "Joyce", "Liliana", "Léana", "Maira", "Margarida", "Maryam", "Melinda", "Philine", "Rea", "Sabrina", "Siara", "Tea", "Zoë", "Anaya", "Anic", "Carina", "Catalina", "Dayana", "Giada", "Lydia", "Naima", "Rosalie", "Soline", "Ylenia", "Zeynep", "Ajana", "Alejna", "Alisha", "Asya", "Elizabeth", "Eléa", "Grace", "Jennifer", "Jill", "Joleen", "Kaja", "Kaya", "Lilian", "Line", "Lorina", "Maelle", "Mariana", "Maxine", "Maëva", "Nele", "Noélie", "Rina", "Samara", "Scarlett", "Simea", "Sofie", "Solène", "Asia", "Assia", "Audrey", "Ayleen", "Carlotta", "Daphné", "Emmy", "Filippa", "Francisca", "Frieda", "Gelila", "Jolene", "June", "Léane", "Malena", "Mayra", "Melek", "Melia", "Milla", "Miray", "Morena", "Myla", "Nika", "Oona", "Robin", "Romane", "Shanaya", "Siena", "Sumeja", "Vivien", "Émilie", "Amilia", "Anila", "Arsema", "Billie", "Carmen", "Célestine", "Diane", "Eléonore", "Emy", "Evin", "Fatima", "Felicia", "Franca", "Helen", "Jelena", "Joya", "Joëlle", "Katharina", "Layana", "Letícia", "Lilou", "Lilya", "Mailin", "Maëlys", "Mélissa", "Nisa", "Nola", "Ophelia", "Philippa", "Stefanie", "Tess", "Thaïs", "Una", "Anesa", "Bella", "Caroline", "Celia", "Clémentine", "Deborah", "Eda", "Elma", "Elya", "Emilija", "Enea", "Esther", "Ivana", "Jenny", "Joanna", "Joelle", "Jonna", "Justine", "Kalina", "Kenza", "Lavin", "Leah", "Lilli", "Lora", "Lua", "Luciana", "Maia", "Mariam", "Melaher", "Meryem", "Morgane", "Noela", "Reina", "Tasnim", "Valentine", "Vittoria", "Zehra", "Zora", "Aida", "Alaya", "Alenia", "Alessa", "Alessandra", "Alyssia", "Amal", "Amber", "Amea", "Amela", "Andrea", "Annabelle", "Annie", "Apolline", "Ariane", "Caterina", "Ciara", "Cléo", "Coline", "Céleste", "Diya", "Eden", "Eldana", "Elona", "Erika", "Fatma", "Finnja", "Florence", "Francesca", "Gwen", "Ilena", "Kylie", "Kyra", "Lanea", "Lani", "Leïla", "Lielle", "Liliane", "Liva", "Liz", "Lylia", "Madeleine", "Malak", "Martha", "Maylin", "Milica", "Nadja", "Najla", "Rufta", "Salma", "Saphira", "Sena", "Shana", "Sia", "Sofía", "Aila", "Aileen", "Aiyana", "Allegra", "Amaia", "Anaëlle", "Ashley", "Aulona", "Ayna", "Azzurra", "Catherine", "Celina", "Dahlia", "Delina", "Deniz", "Diara", "Eleyna", "Eli", "Eliya", "Elza", "Esila", "Federica", "Gabriella", "Hafsa", "Heran", "Héloïse", "Iliana", "Iman", "Jovana", "Laia", "Lenya", "Liora", "Liza", "Loresa", "Léonore", "Malika", "Maliya", "Meliha", "Moira", "Naira", "Pelin", "Rafaela", "Rhea", "Ria", "Riana", "Ronya", "Sandra", "Sarya", "Saskia", "Silvana", "Soleil", "Stina", "Tabea", "Vaiana", "Valérie", "Veronika", "Yana", "Éline", "Adele", "Agata", "Aleksandra", "Alycia", "Amani", "Amna", "Anela", "Asmin", "Athena", "Augustine", "Candice", "Cassandra", "Celeste", "Cleo", "Cécile", "Dalina", "Daniela", "Defne", "Doa", "Efrata", "Eleanor", "Ena", "Enna", "Enora", "Fay", "Gabrielle", "Garance", "Gemma", "Gina", "Helin", "Janna", "Jenna", "Jonida", "Laya", "Leilani", "Lenka", "Leonora", "Lise", "Louna", "Lyna", "Malu", "Manuela", "Margo", "Marisa", "Mattea", "Muriel", "Petra", "Ramona", "Samia", "Sasha", "Theresa", "Tiffany", "Victoire", "Viviana", "Yaëlle", "Zahra", "Zara", "Adeline", "Adina", "Ajlin", "Alizée", "Ameli", "Amely", "Anea", "Arin", "Asma", "Aurélie", "Bruna", "Christina", "Cristina", "Cécilia", "Dania", "Dila", "Elissa", "Elli", "Eléanore", "Esmeralda", "Felia", "Franka", "Franziska", "Gaïa", "Hélène", "Ilana", "Ingrid", "Irene", "Irma", "Isaline", "Janine", "Jasmina", "Junia", "Karolina", "Kimberly", "Lennja", "Leora", "Leyna", "Lidya", "Lira", "Loane", "Lucía", "Ludovica", "Madlaina", "Malya", "Margherita", "Mari", "Marianna", "Marine", "Maura", "Maélie", "Miranda", "Morea", "Mélina", "Naila", "Naëlle", "Nella", "Nelly", "Nikolina", "Nura", "Pina", "Priscilla", "Raphaëlle", "Rebeka", "Roya", "Shirin", "Sidra", "Soley", "Téa", "Veronica", "Vida", "Yaël", "Ylva", "Zana", "Zelda", "Íris", "Abigaëlle", "Adela", "Agnès", "Ajna", "Alara", "Amine", "Andra", "Anik", "Anissa", "Anne", "Armela", "Arsiema", "Aurore", "Avesta", "Axelle", "Aïcha", "Buna", "Capucine", "Cassandre", "Charlène", "Chelsea", "Cloe", "Coco", "Coralie", "Danaé", "Debora", "Dora", "Elenie", "Eliora", "Eloise", "Elora", "Emina", "Enja", "Enola", "Evy", "Ewa", "Fanny", "Faustine", "Holly", "Inés", "Izia", "Julija", "Karla", "Katarina", "Kate", "Katja", "Khadija", "Laetitia", "Laraina", "Learta", "Lejna", "Leyana", "Lidia", "Linea", "Louana", "Luce", "Lyah", "Maddie", "Marika", "Marilou", "Marisol", "Mary", "Maé", "Maïlys", "Merjem", "Michèle", "Mélanie", "Méline", "Mélodie", "Nahla", "Nayeli", "Neela", "Nefes", "Nevia", "Nives", "Noëlle", "Nyla", "Núria", "Ophélie", "Patricia", "Penelope", "Rachel", "Rebekka", "Rim", "Robine", "Robyn", "Rüya", "Sanna", "Selene", "Serafina", "Sharon", "Solea", "Sonia", "Sonja", "Stefania", "Tarja", "Tatiana", "Tatjana", "Teresa", "Tia", "Uma", "Ursina", "Vitória", "Yasmina", "Ylvie", "Zainab", "Zita", "Ziva", "Éléonore", "Abby", "Adelina", "Adna", "Ahsen", "Ainara", "Ajlina", "Aleah", "Aleya", "Alisia", "Alison", "Alyson", "Amila", "Annalena", "Anni", "Antonella", "Arilena", "Astrid", "Aurea", "Aysha", "Barbara", "Belinda", "Blina", "Carlota", "Chanel", "Charlize", "Cheyenne", "Clarissa", "Claudia", "Constance", "Daisy", "Davina", "Diona", "Débora", "Ebrar", "Elana", "Eleana", "Elenya", "Eleonor", "Eleonore"];
exports.names = names;
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45361" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/ch-de-2018-f.ts"], null)
//# sourceMappingURL=/ch-de-2018-f.31f8f6bb.js.map