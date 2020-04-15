const URL = "https://www.instagram.com/culturepub_officiel/?__a=1";
const selector = document.getElementById('id');

fetch(URL)
    .then((response) => response.json())
    .then((response) => {
				    	console.log(response);
				    	return response;
				    	})
	.then((response) => {
						let allPost = response.graphql.user.edge_felix_video_timeline.edges;
					  	
					  	allPost.forEach(function(x){
					  		showInstagramPost(selector, x.node.display_url, x.node.edge_media_to_caption.edges[0].node.text);
					  	});
					  })
	.catch((error) => console.error(error));


const showInstagramPost = (selector, URL, descriptionText) => {

    selector.innerHTML += `
        <div>
            <img src='${URL}' alt='' />
            <p>${descriptionText}</p>
        </div>
    `;
}