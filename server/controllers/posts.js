import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
            // Vu que le PostMessage "demande du temps", il nous faut alors passer en asynchrone et donc également ajouter un await
        console.log(postMessages);
        res.status(200).json(postMessages);
            // Petit rappel : 
            // 200 : succès de la requête ;
            // 301 et 302 : redirection, respectivement permanente et temporaire ;
            // 401 : utilisateur non authentifié ;
            // 403 : accès refusé ;
            // 404 : ressource non trouvée ;
            // 500, 502 et 503 : erreurs serveur ;
            // 504 : le serveur n'a pas répondu.
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res) => {
        // Pour rappel, request & response
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        req.status(490).json({ message: error.message });
    };

}

// Pour rappel on ne peut pas avoir plusieurs default export