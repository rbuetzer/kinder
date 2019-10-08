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
})({"data/ch-de-2018-m.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.names = void 0;
var names = ["Noah", "Leon", "Elias", "Liam", "Ben", "Luca", "Matteo", "Nico", "Nino", "Levin", "Julian", "David", "Louis", "Lian", "Finn", "Leo", "Aaron", "Dario", "Leandro", "Jonas", "Samuel", "Gian", "Lio", "Elia", "Luan", "Livio", "Jan", "Gabriel", "Leano", "Andrin", "Tim", "Alexander", "Diego", "Lukas", "Luis", "Alessio", "Laurin", "Robin", "Nevio", "Loris", "Max", "Levi", "Mattia", "Fabio", "Noel", "Joel", "Benjamin", "Paul", "Nils", "Leonardo", "Linus", "Emil", "Mael", "Timo", "Noar", "Jaron", "Lenny", "Felix", "Lionel", "Mateo", "Daniel", "Maximilian", "Simon", "Lars", "Henry", "Theo", "Lino", "Damian", "Valentin", "Rafael", "Vincent", "Manuel", "Oliver", "Elio", "Nael", "Janis", "Nicolas", "Fabian", "Noé", "Fynn", "Raphael", "Malik", "Marlon", "Lucas", "Luka", "Mauro", "Jamie", "Joshua", "Lean", "Milo", "Miro", "Ajan", "Amar", "Enea", "Adrian", "Nick", "Moritz", "Florian", "Jon", "Kilian", "Lias", "Nelio", "Aron", "Jonathan", "Marco", "Adam", "Alessandro", "Colin", "Kian", "Luc", "Eric", "Jason", "Marvin", "Niklas", "Santiago", "Lorik", "Diar", "Emilio", "Ennio", "Maël", "Dominik", "Juri", "Silas", "Filip", "James", "John", "Oskar", "Ryan", "Ali", "Martin", "Emir", "Maxim", "Alex", "Aurelio", "Yann", "Henri", "Lion", "Marc", "Nevin", "Ruben", "Thierry", "Andri", "Aurel", "Jaro", "Jayden", "Lorenzo", "Louie", "Anuar", "Jakob", "Nando", "Remo", "Silvan", "William", "Yanis", "Dylan", "Emanuel", "Ilay", "Sebastian", "Flavio", "Ivan", "Romeo", "Dion", "Eliah", "Lenn", "Sandro", "Sven", "Theodor", "Tobias", "Oscar", "Tiago", "Maurice", "Arthur", "Ian", "Milan", "Noe", "Sam", "Tom", "Yannick", "Lazar", "Lorin", "Mika", "Nathan", "Flurin", "Henrik", "Mats", "Neo", "Philipp", "Rayan", "Rian", "Rion", "Anik", "Anton", "Enzo", "Jeremy", "Matti", "Omer", "Vito", "Erik", "Joris", "Tenzin", "Arian", "Gino", "Giuliano", "Kevin", "Omar", "Nicola", "Severin", "Deniz", "Francesco", "Jari", "Leonard", "Lior", "Amir", "Devin", "Lennox", "Matthias", "Michael", "Nik", "Nikola", "Stefan", "Thiago", "Aiden", "Andrej", "Danilo", "Julius", "Leart", "Léon", "Ramon", "Andreas", "Bryan", "Jorin", "Ledion", "Till", "Timon", "Christian", "Dominic", "Jaden", "Jonah", "Rejan", "Yannis", "Alan", "Ari", "Daris", "Hamza", "Jano", "Lyan", "Marius", "Maurin", "Samu", "Elian", "Elijah", "Frederik", "Hugo", "Jannis", "Lucien", "Mario", "Marko", "Antonio", "Denis", "Ilyas", "Janosch", "Mike", "Noa", "Pascal", "Teodor", "Thomas", "Alexis", "Enes", "Karl", "Leonis", "Maksim", "Sami", "Teo", "Valerio", "Yasin", "Arion", "Arno", "Dean", "Elion", "Elyas", "Jona", "Loïc", "Luke", "Miran", "Roan", "Tian", "Yuri", "Amin", "Carl", "Ivo", "Kenan", "Muhammed", "Rodrigo", "Angelo", "Aras", "Basil", "Can", "Gabriele", "Jack", "Janik", "Kai", "Mark", "Nilo", "Noan", "Roman", "Ron", "Valentino", "Aris", "Eli", "Emilian", "Evan", "Fionn", "Isa", "Lorenz", "Marcel", "Marin", "Mattis", "Micha", "Mohamed", "Moreno", "Sascha", "Armon", "Bruno", "Julien", "Logan", "Morris", "Philip", "Reto", "Constantin", "Cédric", "Davide", "Florin", "Lauro", "Len", "Mathis", "Matias", "Noam", "Patrick", "Victor", "Viktor", "Ömer", "Adem", "Carlo", "Dian", "Dijar", "Elija", "Fabrice", "Gonçalo", "Ibrahim", "Jim", "Johann", "Théo", "Timeo", "Tristan", "Yanick", "Yari", "Adriano", "Alejandro", "Aleksandar", "Ayden", "Cedric", "Chris", "Darian", "Dorian", "Enis", "Ethan", "Etienne", "Flynn", "Gianluca", "Giulio", "Isaac", "Joan", "Joël", "Jusuf", "Levio", "Lou", "Louan", "Martim", "Miguel", "Mohammed", "Orlando", "Rémy", "Vitus", "Yanik", "Yaro", "Ahmet", "Björn", "Charlie", "Cristian", "Elvis", "Ensar", "Federico", "Georg", "Giuseppe", "Ilias", "Imran", "Janick", "Kaan", "Konstantin", "Leyan", "Liano", "Lorian", "Loui", "Marlo", "Maxime", "Mischa", "Nio", "Nolan", "Pablo", "Raúl", "Ronny", "Tomás", "Ahmed", "Aidan", "Aleksander", "Anis", "Armando", "Corsin", "Damiano", "Edin", "Elvin", "Enio", "Gregory", "Hannes", "Haris", "Ilija", "Jordan", "Jovin", "Jules", "Kiano", "Mateus", "Raffael", "Robert", "Salvador", "Yoan", "Alexandre", "Auron", "Cyril", "Davud", "Dennis", "Dinis", "Eduard", "Eliano", "Eneas", "George", "Ilja", "Jasin", "Johannes", "Josua", "Leonidas", "Lewis", "Lui", "Mailo", "Matheo", "Maurus", "Musa", "Natan", "Nathanael", "Nikolaj", "Quinn", "Riccardo", "Tarik", "Ursin", "Vasco", "Yaron", "Aram", "Ayaz", "Bilal", "Damjan", "Eden", "Emin", "Erion", "Eymen", "Ferdinand", "Flori", "Gioele", "Gion", "Jakub", "Jamiro", "Jannik", "Jay", "Jérôme", "Lauri", "Leander", "Lejan", "Leopold", "Mathieu", "Melvin", "Mustafa", "Naim", "Niilo", "Niko", "Noh", "Pedro", "Phil", "Raphaël", "Rico", "Silvio", "Xavier", "Yannik", "Yassin", "Yuma", "Yusuf", "Zayn", "Zeno", "Adin", "Alec", "Aleksej", "Andrea", "André", "Anes", "Aren", "Brian", "Charles", "Edon", "Elliot", "Endrit", "Eren", "Gustavo", "Hendrik", "Ilai", "Ilario", "Jayson", "Joah", "Joseph", "Keanu", "Kiyan", "Kristijan", "Lennard", "Leron", "Levy", "Lijan", "Liun", "Loran", "Léo", "Magnus", "Matej", "Mathias", "Matija", "Matin", "Mehmet", "Mikail", "Mio", "Nicholas", "Pavle", "Piet", "Rron", "Rüzgar", "Santino", "Sean", "Sinan", "Tobia", "Yves", "Afonso", "Alen", "Andrija", "Anthony", "Ares", "Armin", "Artin", "Axel", "Bastian", "Carlos", "Claudio", "Corvin", "Dan", "Dante", "Eldin", "Eray", "Eron", "Felipe", "Finley", "Giorgio", "Harun", "Igor", "Ilian", "Iven", "Jann", "Jarin", "Jarno", "Johan", "Josef", "Jovan", "Laurent", "Leonas", "Malte", "Merlin", "Michel", "Michele", "Mihajlo", "Miles", "Mirco", "Mohammad", "Naod", "Nathaniel", "Neil", "Nuri", "Olivier", "Owen", "Peter", "Raul", "Rinor", "Roy", "Samuele", "Serafin", "Siar", "Trim", "Vuk", "Ajay", "Albert", "Altin", "Ammar", "Antoine", "Ayan", "Benedikt", "Bennet", "Bernardo", "Boris", "Caleb", "Cem", "Collin", "Cristiano", "Dimitri", "Din", "Duarte", "Edward", "Efe", "Emmanuel", "Erdi", "Ezra", "Fadri", "Gianni", "Ilan", "Iouri", "Ismail", "Ivano", "Jacob", "Jake", "Jeremias", "Junis", "Justus", "Keyan", "Kimi", "Kosta", "Kyan", "Lasse", "Ledian", "Luar", "Lucca", "Luej", "Marino", "Maro", "Niclas", "Novak", "Noyan", "Quirin", "Rajan", "Renzo", "Rio", "Roni", "Sergej", "Simeon", "Taha", "Til", "Tilo", "Tino", "Toni", "Unik", "Vince", "Yigit", "Abraham", "Adnan", "Aid", "Almir", "Amaro", "Anil", "Aran", "Attila", "Benaja", "Benett", "Cla", "Clemens", "Curdin", "Dajjen", "Dejan", "Diogo", "Dior", "Duri", "Edoardo", "Edvin", "Elino", "Eliot", "Enyo", "Erin", "Even", "Francisco", "Gael", "Glen", "Gustav", "Idris", "Isaiah", "Karim", "Kerem", "Leif", "Leno", "Leroy", "Linard", "Lourenço", "Lyo", "Mahir", "Marlin", "Mert", "Miron", "Muhamed", "Nahom", "Neal", "Nicolai", "Niculin", "Nikita", "Nikolai", "Nikolas", "Nil", "Nilas", "Noël", "Ozan", "Paolo", "Pino", "Pirmin", "Renas", "Richard", "Riduan", "Rino", "Rocco", "Salvatore", "Selim", "Sergio", "Theodore", "Thorin", "Timothy", "Timur", "Timéo", "Umut", "Vasilije", "Yonatan", "Younes", "Yousef", "Adil", "Adis", "Ajlan", "Alain", "Amon", "Anas", "Antoni", "Ardian", "Arijan", "Arun", "Arvid", "Aryan", "Azad", "Baran", "Benedict", "Berkay", "Boas", "Béla", "Caspar", "Danny", "Dawid", "Drin", "Edwin", "Elay", "Elis", "Elon", "Elouan", "Emanuele", "Enrico", "Erlis", "Etan", "Filipe", "Friedrich", "Gent", "Giacomo", "Gilles", "Glenn", "Gregor", "Guilherme", "Henos", "Immanuel", "Ismael", "Jacopo", "Jakov", "Janne", "Jasper", "Jesse", "Jimmy", "Jonin", "José", "Juan", "Justin", "Kay", "Keano", "Kerim", "Kuno", "Kuzey", "Kylian", "Leard", "Lejs", "Leonel", "Leonhard", "Loan", "Luciano", "Luigi", "Léan", "Mahdi", "Malek", "Maleo", "Marley", "Mateja", "Matheus", "Mathéo", "Matthew", "Mikko", "Natnael", "Navin", "Nebi", "Nemanja", "Norik", "Patrik", "Pepe", "Petar", "Philippe", "Pietro", "Prince", "Quentin", "Rayen", "Rejjan", "Renato", "Ricardo", "Rijad", "Rouven", "Rui", "Said", "Scott", "Sem", "Semin", "Senay", "Simão", "Stanislaw", "Temesgen", "Tyler", "Ueli", "Vicente", "Vincenzo", "Vittorio", "Yll", "Yoel", "Youssef", "Yven", "Zakaria", "Abanoub", "Abel", "Adonis", "Agan", "Akram", "Aldo", "Aleks", "Alp", "Alparslan", "Amer", "Amos", "Andi", "Ardi", "Arik", "Art", "Atlas", "August", "Augustin", "Benny", "Cosmo", "Damien", "Danis", "Darius", "Darko", "Dave", "Dawit", "Demian", "Dren", "Dávid", "Eddie", "Edi", "Eero", "Elijan", "Ellis", "Eman", "Emiliano", "Enrique", "Enuar", "Ermal", "Esey", "Esrom", "Ettore", "Ezan", "Faris", "Fatih", "Filippo", "Firdeus", "Floris", "Frank", "Frederic", "Fritz", "Georgios", "Gian-Luca", "Giovanni", "Hans", "Hector", "Hussein", "Ilya", "Jerome", "Jorik", "Josiah", "João", "Kabir", "Kaito", "Kaon", "Koray", "Kristian", "Kron", "Lamek", "Leevi", "Lemmy", "Leonit", "Levente", "Levon", "Lewin", "Liron", "Liyan", "Lorent", "Marek", "Markus", "Marwin", "Matis", "Matthieu", "Maxwell", "Metin", "Mian", "Mino", "Mohamad", "Muhammad", "Mylo", "Márk", "Nalu", "Nart", "Nayan", "Nerio", "Nicolò", "Otto", "Poyraz", "Remy", "Riad", "Roméo", "Sasha", "Shane", "Siem", "Thibault", "Thilo", "Tommaso", "Toprak", "Ubejd", "Uvejs", "Valentim", "Valerian", "Veljko", "Vin", "Wim", "Yanic", "Yannic", "Yano", "Yared", "Yoshua", "Yuel", "Abdullah", "Adi", "Aeneas", "Ajet", "Alberto", "Aleksa", "Alexandros", "Alexej", "Alvaro", "Amadeo", "Andre", "Andrew", "Andris", "Anid", "Antonino", "Arda", "Arel", "Arjan", "Arjun", "Arlind", "Arlo"];
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data/ch-de-2018-m.ts"], null)
//# sourceMappingURL=/ch-de-2018-m.33a34914.js.map