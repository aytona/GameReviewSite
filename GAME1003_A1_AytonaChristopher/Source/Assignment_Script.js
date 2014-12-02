var slideimages = new Array()
slideimages[0] = new Image()
slideimages[0].src = "../Images/image_1.jpg"
slideimages[1] = new Image()
slideimages[1].src = "../Images/image_2.png"
slideimages[2] = new Image()
slideimages[2].src = "../Images/image_3.jpg"

var step = 0

function nextSlide()
{
	document.getElementById('slide').src = slideimages[step].src
	
		if(step<2)
		step++
		else
		step=0
}
nextSlide()