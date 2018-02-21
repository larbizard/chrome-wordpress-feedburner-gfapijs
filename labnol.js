google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/larbigharib");
  feed.load(function(result) {
	if (!result.error) {
	  var container = document.getElementById("feed");
	  var html = "";
	  var count = 1;
	  for (var i = 0; i < result.feed.entries.length; i++) {
		var entry = result.feed.entries[i];
		html = "<h5>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h5>";
		var div = document.createElement("div");
		/*div.appendChild(document.createTextNode(entry.title));*/
		div.innerHTML = html;
		container.appendChild(div);
	  }
	}
  });
}
google.setOnLoadCallback(initialize);