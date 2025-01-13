document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        {
            id: 1,
            title: "What is cyber security?",
            thumbnail: "https://cdn.discordapp.com/attachments/1305950343435386923/1309547578689323120/Screenshot_from_2024-11-22_21-24-01.png?ex=6741fab8&is=6740a938&hm=da6f3a7afec67986c5010be008116d589872aa8f0dea08b7470fedf166d9ca23&",
            views: "1.2M",
            description: "This is a sample video description.",
            videoUrl: "https://youtu.be/Yr0xPVFcf-U?feature=shared" // Sample YouTube video URL
        },       
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "3M",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://youtu.be/gyMwXuJrbJQ?feature=shared"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 3,
            title: "Exploring the World 3",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "500K",
            description: "An amazing exploration journey around the world.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },

        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Incredible Video 2",
            thumbnail: "assets/video-thumbnail.jpg",
            views: "750K",
            description: "Watch this incredible video with stunning views!",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
        // More video objects can be added here
    ];

    const videoGrid = document.getElementById("video-grid");
    const videoPlayer = document.getElementById("video-player");
    const videoFrame = document.getElementById("video-frame");
    const videoTitle = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");

    // Generate video cards dynamically
    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="Video Thumbnail">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.views} views</p>
            </div>
        `;
        // Add click event to load video into player
        videoCard.addEventListener("click", () => {
            videoFrame.src = video.videoUrl;
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.description;
        });
        videoGrid.appendChild(videoCard);
    });

    // Default video selection
    if (videos.length > 0) {
        const firstVideo = videos[0];
        videoFrame.src = firstVideo.videoUrl;
        videoTitle.textContent = firstVideo.title;
        videoDescription.textContent = firstVideo.description;
    }
});
