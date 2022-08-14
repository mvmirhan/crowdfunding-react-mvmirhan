export const allProjects = 
[
    {
        "id": 2,
        "title": "MRM First",
        "description": "The first gig",
        "goal": 1500,
        "image": "https://images.unsplash.com/photo-1554317070-de6adf0299fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjMxMTQ5MjY0&ixlib=rb-1.2.1&q=80&w=1080",
        "is_open": true,
        "date_created": "2021-04-20T14:28:23.382748Z",
        "owner": 1
    },
    {
        "id": 1,
        "title": "Anchormen Intro version",
        "description": "The first live show.",
        "goal": 4500,
        "image": "https://th.bing.com/th/id/R.7095398c1bd32b133df2957c210dac1b?rik=XctQthj3nbj6%2fg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1598387994710-5a7e32088b49%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8dm9jYWwlMjBjb25jZXJ0fHwwfHx8fDE2MjcyNzkzNjk%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=1sw%2bGOmoUy7o1OUA9RLnDRr7w%2fPVel2Yl%2f2mV8b3Trw%3d&risl=&pid=ImgRaw&r=0",
        "is_open": true,
        "date_created": "2020-03-20T14:28:23.382748Z",
        "owner": 1
    },
    {
        "id": 3,
        "title": "Marivic's Project",
        "description": "Musikantro Launch",
        "goal": 1500,
        "image": "https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "is_open": true,
        "date_created": "2022-06-20T14:28:23.382748Z",
        "owner": 1
    }
]

export const oneProject = {
        "id": 3,
        "title": "Marivic's Project",
        "description": "Musikantro Launch",
        "goal": 1500,
        "image": "https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "is_open": true,
        "date_created": "2022-06-20T14:28:23.382748Z",
        "owner": 1,
        "pledges": [
            {
             id: 1,
             amount: 100,
             comment: "A pledge comment",
             anonymous: false,
             supporter: 3,
             project_id: 3,   
            }
        ]   
}