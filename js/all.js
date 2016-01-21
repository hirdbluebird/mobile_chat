$(document).ready(function() {
	$("#addPost").on("click", function() {
		var textareaValue = $("#postForm textarea").val();
		$('#postWrapper').append('<section class="single-post"><p class="post-inform"><span class="name">Имануил</span><span class="post-data">13 октября 2011</span></p><p class="post">'+ textareaValue + '</p></section>');
	})
})