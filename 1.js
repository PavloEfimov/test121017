test.onmousemove = function (e) {

	if (e.offsetY<=50&&e.offsetY>0) {

	inner.style.display = 'block';
	console.log(e);
	console.log(e.offsetY);
	console.log(e.target.style.top);
	inner.style.top = '-290px';
	}
	else if (e.offsetY>50&&e.offsetY<150) {
	inner.style.top = 0;
	inner.style.display = 'block';

	}

	else if (e.offsetY>=250&&e.offsetY<300) {

	inner.style.display = 'block';
	console.log(e);
	console.log(e.offsetY);
	console.log(e.target.style.top);
	inner.style.top = '290px';
	}
	else if (e.offsetY<250&&e.offsetY>=150) {
	inner.style.top = 0;
	inner.style.display = 'block';
	}

	else inner.style.display = 'none';
}





