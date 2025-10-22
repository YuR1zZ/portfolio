import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}





// Rose Section

function Cycle(re, im, freq) {
	this.re = re;
	this.im = im;
	this.freq = freq;
	this.amp = sqrt(re*re + im*im);
	this.phase = atan2(im, re);
}

function DFT(datas) {
	var N = datas.length;
	var frequencies = [];
	for (let freq = -N/2 ; freq < N/2 ; freq += 1) {
		let re = 0, im = 0;
		for (let t = 0.0 ; t < N ; t++) {
			let rate = -duration * freq;

			let time = t / N;
			let distance = rate * time;

			let re_part = datas[t].x * cos(distance);
			let im_part = -datas[t].x * sin(distance);

			re_part += datas[t].y * sin(distance);
			im_part += datas[t].y * cos(distance);

			re += re_part;
			im += im_part;
		}

		re = re / N;
		im = im / N;

		frequencies.push(new Cycle(re, im, freq));
	}
	return frequencies;
}

function iDFT(factor) {
  let t = factor * duration;
  let sum = createVector();
  for (let i = 0 ; i < min(cycleCount, cs.length) ; i++) {
    let cycle = cs[i];
    sum.x += cos(t*cycle.freq + cycle.phase)*cycle.amp;
    sum.y += sin(t*cycle.freq + cycle.phase)*cycle.amp;
  }
  return sum;
}
