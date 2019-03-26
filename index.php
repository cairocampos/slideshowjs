<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Slideshow com JS</title>
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main>
			<div id="slideshow">
				<div class="slideshowarea">
					<div class="slide" style="background-image: url(slides/slide01.jpg);"></div>
					<div class="slide" style="background-image: url(slides/slide02.jpg);"></div>
					<div class="slide" style="background-image: url(slides/slide03.jpg);"></div>
					<div class="slide" style="background-image: url(slides/slide04.jpg);"></div>
				</div>
			</div>
			<div class="balls">
				<div class="ball" onclick="nextSlide(0)"></div>
				<div class="ball" onclick="nextSlide(1)"></div>
				<div class="ball" onclick="nextSlide(2)"></div>
				<div class="ball" onclick="nextSlide(3)"></div>
			</div>
		</main>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>