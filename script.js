let shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', (event) => {
    event.preventDefault();
		// Check If Browser SUpport Web Share API
    if (navigator.share) {
			let title = 'Name Game';
			let textMessage = 'Hey Dear Check this awesome site and see what your name say about your Personality? Check now...';
			let url = 'https://shakiltech.com/name-game/';
        navigator.share({
            title: title,
            text: textMessage,
            url: url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
    } else {
			// If not supported redirec to link specified in anchor href attribute
        window.location.replace(event.target.href);
    }
})