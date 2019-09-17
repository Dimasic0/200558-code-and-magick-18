'use strict';

var cloud_width = 420;
var cloud_height = 270;
var bar_width = 40;
var bar_height= 150;
var cloud_x = 100;
var cloud_y = 10;
var bar_x = 140;
var bar_y = 100;
var gap = 10;
var bar_gap = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloud_width, cloud_height);
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
  var cloud_shadow_x = cloud_x + gap;
  var cloud_shadow_y = cloud_y + gap;

  renderCloud(ctx, cloud_shadow_x, cloud_shadow_y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloud_x, cloud_y, '#fff');

  getTextValue(ctx, 'Ура вы победили!', 120, 42, '#000000');
  getTextValue(ctx, 'Список результатов:', 120, 62, '#000000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var playerName = names[i];
    var playerNameX = bar_x + (bar_width + bar_gap) * i;

    getTextValue(ctx, playerName, playerNameX, cloud_height, '#000000');

    var playerScore = Math.round(times[i]);
    var playerScoreX = bar_x + (bar_width + bar_gap) * i;
    var playerScoreY = cloud_height - (bar_height * times[i] / maxTime) - gap * 3;

    getTextValue(ctx, playerScore, playerScoreX, playerScoreY, '#000000');

    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    var barHeightWinner = (bar_height * times[i] / maxTime) * -1;
    var barXWinner = bar_x + (bar_width + bar_gap) * i;
    var barYWinner = bar_y + bar_height;

    ctx.fillRect(barXWinner, barYWinner, bar_width, barHeightWinner);
  }
};
