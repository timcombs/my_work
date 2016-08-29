'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  hourlyCookieArray: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCookies = Math.ceil(this.cookiesPerHour());
      this.totalCookies += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = '1st and Pike';
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';

    ul.appendChild(h2);
    ul.appendChild(li);

    var clockTime;
    for (var j = 0; j < 15; j++) {

      if (j < 6){
        clockTime = (j + 6) + 'am';
      }else if (j === 6) {
        clockTime = (j + 6) + 'pm';
      }else if (j > 6) {
      clockTime = (j - 6) + 'pm';
      }

      var hourLi = document.createElement('li');
      hourLi.textContent = clockTime + ': ' + this.hourlyCookieArray[j] + ' cookies';
      ul.appendChild(hourLi)
    }
    ul.appendChild(li);
    main.appendChild(ul);
  }
};

pike.cookiesPerDay();
pike.render();

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  hourlyCookieArray: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCookies = Math.ceil(this.cookiesPerHour());
      this.totalCookies += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'SeaTac Airport';
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';

    ul.appendChild(h2);
    ul.appendChild(li);

    var clockTime;
    for (var j = 0; j < 15; j++) {

      if (j < 6){
        clockTime = (j + 6) + 'am';
      }else if (j === 6) {
        clockTime = (j + 6) + 'pm';
      }else if (j > 6) {
      clockTime = (j - 6) + 'pm';
      }

      var hourLi = document.createElement('li');
      hourLi.textContent = clockTime + ': ' + this.hourlyCookieArray[j] + ' cookies';
      ul.appendChild(hourLi)
    }
    ul.appendChild(li);
    main.appendChild(ul);
  }
};

seaTac.cookiesPerDay();
seaTac.render();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  hourlyCookieArray: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCookies = Math.ceil(this.cookiesPerHour());
      this.totalCookies += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Seattle Center';
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';

    ul.appendChild(h2);
    ul.appendChild(li);

    var clockTime;
    for (var j = 0; j < 15; j++) {

      if (j < 6){
        clockTime = (j + 6) + 'am';
      }else if (j === 6) {
        clockTime = (j + 6) + 'pm';
      }else if (j > 6) {
      clockTime = (j - 6) + 'pm';
      }

      var hourLi = document.createElement('li');
      hourLi.textContent = clockTime + ': ' + this.hourlyCookieArray[j] + ' cookies';
      ul.appendChild(hourLi)
    }
    ul.appendChild(li);
    main.appendChild(ul);
  }
};

seattleCenter.cookiesPerDay();
seattleCenter.render();

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  hourlyCookieArray: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCookies = Math.ceil(this.cookiesPerHour());
      this.totalCookies += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Capitol Hill';
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';

    ul.appendChild(h2);
    ul.appendChild(li);

    var clockTime;
    for (var j = 0; j < 15; j++) {

      if (j < 6){
        clockTime = (j + 6) + 'am';
      }else if (j === 6) {
        clockTime = (j + 6) + 'pm';
      }else if (j > 6) {
      clockTime = (j - 6) + 'pm';
      }

      var hourLi = document.createElement('li');
      hourLi.textContent = clockTime + ': ' + this.hourlyCookieArray[j] + ' cookies';
      ul.appendChild(hourLi)
    }

    ul.appendChild(li);
    main.appendChild(ul);
  }
};

capHill.cookiesPerDay();
capHill.render();

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  hourlyCookieArray: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCookies = Math.ceil(this.cookiesPerHour());
      this.totalCookies += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Alki';
    li.textContent = 'Total: ' + this.totalCookies + ' cookies';

    ul.appendChild(h2);
    ul.appendChild(li);

    var clockTime;
    for (var j = 0; j < 15; j++) {

      if (j < 6){
        clockTime = (j + 6) + 'am';
      }else if (j === 6) {
        clockTime = (j + 6) + 'pm';
      }else if (j > 6) {
      clockTime = (j - 6) + 'pm';
      }

      var hourLi = document.createElement('li');
      hourLi.textContent = clockTime + ': ' + this.hourlyCookieArray[j] + ' cookies';
      ul.appendChild(hourLi)
    }
    ul.appendChild(li);
    main.appendChild(ul);
  }
};

Alki.cookiesPerDay();
Alki.render();
