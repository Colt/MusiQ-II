// Template.searchResults.helpers({
//   results: musiqApp_searchResults
// });

Template.searchResults.results = function() {
  musiqApp_searchResults_dep.depend();
  return musiqApp_searchResults;
};

Template.searchResults.events({
  'click .addSong': function(e) {
    e.preventDefault();
    // save selected song
    Requests.insert({
      title: this.title,
      videoId: this.videoId,
      status: "waiting"
    });
    // clear current search results list, and signal data change
    musiqApp_searchResults.length = 0;
    musiqApp_searchResults_dep.changed();
  }
});