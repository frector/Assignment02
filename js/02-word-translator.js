let languageCode = prompt('Enter your language code:\n es for Spanish\n de for German\n en for English\n fr for French');

    if (languageCode === "es") {
        console.log('Hello World translated into Spanish is: Hola Mundo');
    } else if (languageCode === "de") {
        console.log('Hello World translated into German is: Halo Welt');
    } else if (languageCode === "en") {
        console.log('Hello World in English is Hello World');
    } else if (languageCode === "fr") {
            console.log('Hello World translated into French is: Bonjour le Monde');
    } else {
        console.log('Hello World in English is Hello World');
    }
