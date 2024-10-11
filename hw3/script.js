// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let rdx = getRandomArbitrary(50, 150);
let rdx2 = getRandomArbitrary(50, 150);
let rdy = getRandomArbitrary(50, 150);
let rdy2 = getRandomArbitrary(50, 150);
let x = [rdx, rdx+rdx2, rdx+rdx2+getRandomArbitrary(60, 150)];
let y = [rdy, rdy+rdy2, rdy+rdy2+getRandomArbitrary(60, 150)];
let dx = [getRandomArbitrary(5, 10), getRandomArbitrary(5, 10), getRandomArbitrary(5, 10)];
let dy = [getRandomArbitrary(5, 10), getRandomArbitrary(5, 10), getRandomArbitrary(5, 10)];
let r = [30, 40, 50], color = ["#0080FF", "#9F35FF", "#FF00FF"];
let dist;
let n = 3;



// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function dis(a, b)
{
	dist = (x[a] - x[b]) * (x[a] - x[b]) + (y[a] -  y[b]) * (y[a] - y[b]);
	if(dist < ((r[a] + r[b]) * (r[a] + r[b])) ) hit(a, b);
}

function hitx(i)
{
	dx[i] = -dx[i];
}

function hity(i)
{
	dy[i] = -dy[i];
}

let vxa, vxb, vya, vyb, ma, mb;

function hit(a, b)
{
	ma = r[a] * r[a];
	mb = r[b] * r[b];
	vxa = dx[a], vxb = dx[b];
	vya = dy[a], vyb = dy[b];
	dx[a] = ((ma - mb) * vxa + 2 * mb * vxb) / (ma + mb);
	dy[a] = ((ma - mb) * vya + 2 * mb * vyb) / (ma + mb);
	dx[b] = ((mb - ma) * vxb + 2 * ma * vxa) / (ma + mb);
	dy[b] = ((mb - ma) * vyb + 2 * ma * vya) / (ma + mb);
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

	for(let i = 0 ; i < n ; i++)
	{
		x[i] = x[i] + dx[i];
		y[i] = y[i] + dy[i];
		if(x[i] < r[i] || (x[i] + r[i]) > canvas.width) hitx(i);
		if(y[i] < r[i] || (y[i] + r[i]) > canvas.height) hity(i);
		for(let j = 0 ; j < n ; ++j)
		{
			dis(j, ((j+1)%n));
		}
		drawBall(x[i], y[i], r[i], color[i]);
	}
    requestAnimationFrame(draw);
}
draw();


