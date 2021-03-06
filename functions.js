var defaultLabelText = "git grep 'objectName' -- '*.php'";
var labelText = defaultLabelText;
var maxChars = 44;

function draw(ctx) {
	var canvas = $("canvas");
	canvas.width=1012;//horizontal resolution (?) - increase for better looking text
	canvas.height=440;//vertical resolution (?) - increase for better looking text
	canvas.style.width=506;//actual width of canvas
	canvas.style.height=220;//actual height of canvas

	ctx.rect(0,00,1012,440);
	ctx.fillStyle="#272822";
	ctx.fill();

	var fontSize = 44;
	var canvas = document.getElementById('canvas');
	var x = canvas.width / 2;
	var y = canvas.height / 2 - fontSize / 2;   
	var fillText = labelText.substr(0, maxChars);

	ctx.textBaseline = "top";
	ctx.font = fontSize+"px Inconsolata";

	ctx.textAlign = 'center';

	ctx.fillStyle = "#f1f1f1";
	ctx.fillText(fillText, x, y);
}

function downloadCanvas(link, canvasId, filename) {
	link.href = document.getElementById(canvasId).toDataURL();
	link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
	downloadCanvas(this, 'canvas', 'test.png');
}, false);

document.getElementById('label').addEventListener('keyup', function() {
	labelText = this.value;
	charCount = labelText.length;
	document.getElementById('count').innerHTML = maxChars - charCount;

	if (charCount > maxChars) {
		document.getElementById('count').style.color = "red";
	} else {
		document.getElementById('count').style.color = "#f1f1f1";
		if (charCount == 0) {
			labelText = defaultLabelText;
		}
	}

	draw(document.getElementById('canvas').getContext('2d'));
}, false);
