'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_X = 140;
var BAR_Y = 100;
var GAP = 10;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getTextValue = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (element) {
  var maxElement = element[0];

  for (var i = 1; i < element.length; i++) {
    if (element[i] > maxElement) {
      maxElement = element[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  var cloudShadowX = CLOUD_X + GAP;
  var cloudShadowY = CLOUD_Y + GAP;

  renderCloud(ctx, cloudShadowX, cloudShadowY, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  getTextValue(ctx, 'Ура вы победили!', 120, 42, '#000000');
  getTextValue(ctx, 'Список результатов:', 120, 62, '#000000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var playerName = names[i];
    var playerNameX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;

    getTextValue(ctx, playerName, playerNameX, CLOUD_HEIGHT, '#000000');

    var playerScore = Math.round(times[i]);
    var playerScoreX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var playerScoreY = CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - GAP * 3;

    getTextValue(ctx, playerScore, playerScoreX, playerScoreY, '#000000');

    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    var barHeightWinner = (BAR_HEIGHT * times[i] / maxTime) * -1;
    var barXWinner = BAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var barYWinner = BAR_Y + BAR_HEIGHT;

    ctx.fillRect(barXWinner, barYWinner, BAR_WIDTH, barHeightWinner);
  }
};
