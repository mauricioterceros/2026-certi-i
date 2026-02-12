var greetings;
if (locale == 'es') {
	greetings = esDeDia ? Buenos Dias : Buenas Noches

} else if (locale == 'en' && locale == 'us') {
	greetings = isMorning ? Good Morning : Good Afternoon

}

alert(greetings);
