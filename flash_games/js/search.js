
function search(){

	var searchString = document.getElementById("searchButton").value
    
	if (searchString !== ""){
		
		var input, indexDir, valueTerm, found, z, searchTerm, y, filter, ul,x, li, a, i, txtValue, results = [];
    	filter = searchString.toUpperCase().replace(/\s+/g, '');
        
        
    	li = ["Bloons TD 5", "Deadzed 2", "Earn To Die 2012", "Gun Mayhem 2", "Ricochet Kills 4", "Storm Ops 4", "Territory War", "Bob the Robber 2",  "Escaping the Prison", "Infiltrating the Airship", "Red Ball 3", "Red Ball 4", "Red Ball 4 Volume 2", "Red Ball 3 Volume 3", "Troll Cannon 2", "Escape the Office", "I saw her across the World", "Ninja Cannon", "The Impossible Quiz", "The Impossible Quiz 2", "Epic Time Pirates", "Strike Force Heroes", "Strike Force Heroes 2", "Into Space 2", "Stealing the Diamond", "Apple Shooter", "Catch the Candy Halloween", "Death Lab", "Epic Boss Fighter", "Freeway Fury 2", "Gibbets 4", "Kick the critter", "Rescuenator", "Super Marshmellow Kingdom", "Watermania", "Disaster will Strike 3", "Liquid Measure Crystal Waterpack", "Monkey Go Happy Ballons", "What's inside the Box", "Wheely 3", "Basketball Legends", "Grand Truckismo", "Madmen Racing", "New stars Soccer", "Paintball racers", "Puppet Soccer 2014", "Renegade racing", "Superbike racer", "The champions 4: World Domination", "Uphill Rush 6"]
    	htmlLinks = ["js/htmlDownloads/action/bloons-td-5-17839/bloons-td-5-17839.html", "js/htmlDownloads/action/deadzed2/deadzed2.html", "js/htmlDownloads/action/earntodie2012-part2/earntodie2012-part2.html", "js/htmlDownloads/action/gun-mayhem-11419/gun-mayhem-11419.html", "js/htmlDownloads/action/ricochetkills4/ricochetkills4.html", "js/htmlDownloads/action/stormops4/stormops4.html", "js/htmlDownloads/action/territorywar/territorywar.html", "js/htmlDownloads/adventure/bobtherobber2/bobtherobber.html", "js/htmlDownloads/adventure/escapingtheprison/escapingtheprison.html", "js/htmlDownloads/adventure/infiltratingtheairship/infiltratingtheairship.html", "js/htmlDownloads/adventure/redball3/redball3.html", "js/htmlDownloads/adventure/redball4/redball4.html", "js/htmlDownloads/adventure/redball4-volume2/redball4-volume2.html", "js/htmlDownloads/adventure/redball4-volume3/redball4-volume3.html", "js/htmlDownloads/adventure/trollcannon2/trollcannon2.html","js/htmlDownloads/puzzle/escapetheoffice/escapetheoffice.html", "js/htmlDownloads/puzzle/isawheracrosstheworld/isawheracrosstheworld.html", "js/htmlDownloads/puzzle/ninjacannon/ninjacannon.html", "js/htmlDownloads/theimpossiblequiz/theimpossiblequiz.html", "js/htmlDownloads/puzzle/theimpossiblequiz2/theimpossiblequiz2.html", "js/htmlDownloads/action/epictimepirates/epictimepirates.html", "js/htmlDownloads/action/strikeforceheroes/strikeforceheroes.html", "js/htmlDownloads/action/strikeforceheroes2/strikeforceheroes2.html", "js/htmlDownloads/adventure/intospace2/intospace2.html", "js/htmlDownloads/adventure/stealingthediamond/stealingthediamond.html", "js/htmlDownloads/arcade/appleshooter/appleshooter.html", "js/htmlDownloads/arcade/catchthecandyhalloween/catchthecandyhalloween.html", "js/htmlDownloads/arcade/deathlab/deathlab.html", "js/htmlDownloads/arcade/epicbossfighter/epicbossfighter.html", "js/htmlDownloads/arcade/freewayfury2/freewayfury2.html", "js/htmlDownloads/arcade/gibbets4/gibbets4.html", "js/htmlDownloads/arcade/kickthecritter/kickthecritter.html", "js/htmlDownloads/arcade/rescuenator/rescuenator.html", "js/htmlDownloads/arcade/supermarshmallowkingdom/supermarshmallowkingdom.html", "js/htmlDownloads/arcade/watermania/watermania.html", "js/htmlDownloads/puzzle/disasterwillstrike3/disasterwillstrike3.html", "js/htmlDownloads/puzzle/liquidmeasurecrystalwaterpack/liquidmeasurecrystalwaterpack.html", "js/htmlDownloads/puzzle/monkeygohappyballoons/monkeygohappyballoons.html", "js/htmlDownloads/puzzle/whatsinsidethebox/whatsinsidethebox.html", "js/htmlDownloads/puzzle/wheely3/wheely3.html", "js/htmlDownloads/sport/basketballlegends/basketballlegends.html", "js/htmlDownloads/sport/grandtruckismo/grandtruckismo.html", "js/htmlDownloads/sport/madmenracing/madmenracing.html", "js/htmlDownloads/sport/newstarsoccer/newstarsoccer.html", "js/htmlDownloads/sport/paintballracers/paintballracers.html", "js/htmlDownloads/sport/puppetsoccer2014/puppetsoccer2014.html", "js/htmlDownloads/sport/renegaderacing/renegaderacing.html", "js/htmlDownloads/sport/superbikeracer/superbikeracer.html", "js/htmlDownloads/sport/thechampions4-worlddomination/thechampions4-worlddomination.html", "js/htmlDownloads/sport/uphillrush6/uphillrush6.html"]
    	htmlLinkIndex = []
        for (i = 0; i < li.length; i++) {
            txtValue = li[i].replace(/\s+/g, '');
            if ( filter.length > 4){
                    found = false
                    for (x = 1; x<filter.length+1; x++){
                        searchTerm = filter.slice(0, x-1) + filter.slice(x)
                        for (y = 1; y<txtValue.length+1; y++){
                            valueTerm = txtValue.slice(0, y-1) + txtValue.slice(y)
                            if (valueTerm.toUpperCase().indexOf(searchTerm) > -1) {
                                results.push(li[i])
                                htmlLinkIndex.push(i)
                                found = true
                                break
                            }
                } if (found){
                    break
                }
            }

    } else{
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    results.push(li[i])
                    htmlLinkIndex.push(i)
                }
    }   
           
}

var linkToAdd;

    document.getElementById("searchButton").style.border = "1px solid white";
    var searchResultBarsDOMObject = document.getElementsByClassName("list-group-item");
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'))
    for (var i=0;i<5; i++){
    			searchResultBarsDOMObject[i].innerHTML = results[i]
    			searchResultBarsDOMObject[i].style.display = "none";
    		}
        dir = dir.split("/")
        indexDir = dir.length - 3
    	if (results.length == 0){
            var i = 0
            searchResultBarsDOMObject[i].innerHTML = "No results found.";
            searchResultBarsDOMObject[i].style.display = "block";
        }

    	else if (results.length <= 5){
    		for (var i=0;i<results.length; i++){
    			searchResultBarsDOMObject[i].innerHTML = results[i]
    			searchResultBarsDOMObject[i].style.display = "block";
                
                if (dir[indexDir] === "htmlDownloads"){
                    linkToAdd = "../../../../" + htmlLinks[htmlLinkIndex[i]] 
                } else{
                    linkToAdd = htmlLinks[htmlLinkIndex[i]] 
                }
    			searchResultBarsDOMObject[i].href = linkToAdd
            }
            
    	}else { 
    		for (var i=0;i<5; i++){
                if (dir[indexDir] === "htmlDownloads"){
                    linkToAdd = "../../../../" + htmlLinks[htmlLinkIndex[i]] 
                } else{
                    linkToAdd =htmlLinks[htmlLinkIndex[i]] 
                }
    			searchResultBarsDOMObject[i].innerHTML = results[i]
    			searchResultBarsDOMObject[i].style.display = "block";
    			searchResultBarsDOMObject[i].href = linkToAdd
    		}
    	}
	} else{
		document.getElementById("searchButton").style.border = "1px solid red";
	}
}

document.addEventListener('keypress', function(e){
    if (e.keyCode == 13){ // enter
        search()
    } 
} );


document.getElementById("main").addEventListener("click", function(){
    var searches = document.getElementsByClassName("list-group-item")
    for (i = 0; i<searches.length; i++){
       searches[i].style.display = "none";
    }
});
 