function() {
	var value =
 	{
		count_votos : parseInt(this.total_votes),
		score : parseInt(this.score)
	};

	emit(this.title, value);
}
