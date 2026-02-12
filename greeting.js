var greetings;
if (locale == 'es') {
	greetings = esDeDia ? Buenos Dias : Buenas Noches

} else if (locale == 'en' || locale == 'br') {
	greetings = isMorning ? Good Morning : Good Afternoon

}

alert(greetings);
