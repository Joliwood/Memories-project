export default (posts = [], action) => {
    // Ici on est obligé de mettre des [] car on ne peut pas "initialiser" un state sans rien mettre -> by the way, le "state" est remplacé par posts car c'est plus représentatif de notre appplication

    switch (action.tyoe) {
        case "FETCH_ALL":
            return posts;
        case "CREATE":
            return posts;
        default:
            return posts;
    };
};