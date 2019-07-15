'use strict';

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  randomNum: function ()
  {
    return Math.floor(Math.random(23) * Math.floor(65));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
  totalSold: function () {
    for (var i = 0; i < hours.length; i++)
    {
      var cookieSum = '0';
      cookieSum = cookieSum + cookiePerHour;
    }

    return cookieSum;
  },
};

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  randomNum: function ()
  {
    return Math.floor(Math.random(3) * Math.floor(24));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
  totalSold: function () {
    for (var i = 0; i < hours.length; i++)
    {
      var cookieSum = '0';
      cookieSum = cookieSum + cookiePerHour;
    }

    return cookieSum;

  },
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  randomNum: function ()
  {
    return Math.floor(Math.random(11) * Math.floor(38));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
  totalSold: function () {
    for (var i = 0; i < this.hours.length; i++)
    {
      var cookieSum = '0';
      cookieSum = cookieSum + cookiePerHour;
    }

    return cookieSum;

  },
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  randomNum: function ()
  {
    return Math.floor(Math.random(20) * Math.floor(38));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
  totalSold: function () {
    for (var i = 0; i < hours.length; i++)
    {
      var cookieSum = '0';
      cookieSum = cookieSum + cookiePerHour;
    }

    return cookieSum;

  },
};

var aiki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  randomNum: function ()
  {
    return Math.floor(Math.random(2) * Math.floor(16));
  },

  hours: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
  totalSold: function () {
    for (var i = 0; i < hours.length; i++)
    {
      var cookieSum = '0';
      cookieSum = cookieSum + cookiePerHour;
    }

    return cookieSum;

  },
};

function cookieperHour(obj)
{
  var cookie = obj.avgCookie;
  var customerAmount = obj.randomNum;
  var hourlyCookies = customerAmount * cookie;
  return Number(hourlyCookies);
}

console.log(cookieperHour(firstAndPike));
console.log(firstAndPike.randomNum());
