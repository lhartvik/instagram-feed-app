const initialData = {
    profile: {
        avatar: require("../assets/instagram-feed-app/ia00.png"),
    },
    stories: [
        {
            id: "s1",
            avatar: require("../assets/instagram-feed-app/ia01.png"),
            name: "blam",
            isSeen: false
        },
        {
            id: "s2",
            avatar: require("../assets/instagram-feed-app/ia02.png"),
            name: "theRoxer",
            isSeen: false
        },
        {
            id: "s3",
            avatar: require("../assets/instagram-feed-app/ia03.png"),
            name: "Wunderscate",
            isSeen: true
        },
    ],
    articles: [
        {
            id: 1,
            avatar: require("../assets/instagram-feed-app/ia06.png"),
            name: "Largeman the great",
            image: require("../assets/instagram-feed-app/aimg05.png"),
            likes: 10,
            commentCount: 120,
            comments:"View all 0 comments"
        },

        {
            id: 2,
            avatar: require("../assets/instagram-feed-app/ia07.png"),
            name: "Lora Worth",
            image: require("../assets/instagram-feed-app/aimg01.png"),
            likes: 123,
            commentCount: 7,
            comments:"View all 0 comments"
        },

        {
            id: 3,
            avatar: require("../assets/instagram-feed-app/ia08.png"),
            name: "Sabal Myrak",
            image: require("../assets/instagram-feed-app/aimg02.png"),
            likes: 43,
            commentCount: 3,
            comments:"View all 0 comments"
        },

        {
            id: 4,
            avatar: require("../assets/instagram-feed-app/ia10.png"),
            name: "Hans Fesburg",
            image: require("../assets/instagram-feed-app/aimg03.png"),
            likes: 56,
            commentCount: 30,
            comments:"View all 0 comments"
        },

        {
            id: 5,
            avatar: require("../assets/instagram-feed-app/ia09.png"),
            name: "Gnary Gnarf",
            image: require("../assets/instagram-feed-app/aimg04.png"),
            likes: 6876,
            commentCount: 0,
            comments:"View all 0 comments"
        },
    ]
}

export default initialData;
