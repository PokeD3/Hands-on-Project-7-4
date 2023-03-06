<!--
   JavaScript 6th Edition
   Chapter 7
   Hands-on Project 7-4

   Author: Douglas Faulkner
   Date:   March 5, 2023

   Filename: script.js
-->
//Step4
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
//Step5
function processDeliveryInfo() {
	var prop;
	delivInfo.name = document.getElementById("nameinput").value;
	delivInfo.addr = document.getElementById("addrinput").value;
	delivInfo.city = document.getElementById("cityinput").value;
	delivInfo.email = document.getElementById("emailinput").value;
	delivInfo.phone = document.getElementById("phoneinput").value;
   //Step6
	for (prop in delivInfo) {
		delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	}
}
//Step7
function previewOrder() {
	processDeliveryInfo();
	document.getElementById("sec").style.display = "block";
}
//Step8
function createEventListeners() {
	var btn = document.getElementById("previewBtn");
	btn.addEventListener("click", previewOrder, false);
}
//Step9
if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}