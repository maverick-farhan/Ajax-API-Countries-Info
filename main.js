//XMLHttpRequest Method(Traditional)
const container = document.getElementById("container");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/bharat");
request.send();
//Recieving
request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const htmlData = `<div class="img"><img src="${data.flag}" alt=""></div>
  	<div class="center-name"><h1>${data.name}</h1></div>
	<div class="details">
		<div class="con-capital">
			<h6 class="capital">Capital</h6>
			<small>${data.capital}</small>
		</div>

		<div class="con-language">
			<h6 class="language">Language</h6>
			<small>${data.languages[0].name}</small>
		</div>
		
		<div class="con-currency">
			<h6 class="currency">Currency</h6>
			<small>${data.currencies[0].name}</small>
		</div>
		<div class="con-population">
			<h6 class="population">Population</h6>
			<small>${data.population}</small>
		</div>

	</div>
		`;
  container.insertAdjacentHTML("afterbegin", htmlData);
});
