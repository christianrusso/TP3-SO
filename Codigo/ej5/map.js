function() {
	var value =
	{
		score: parseInt(this.score),
		cantidad_palabras : this.title.split(" ").length
	};

	emit(this.subreddit, value);
}
