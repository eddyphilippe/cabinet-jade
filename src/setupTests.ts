// jest-dom ajoute des assertions adaptées au DOM, comme toBeInTheDocument().
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom n'implémente pas le défilement. Sans ce remplacement, ScrollManager
// noie la sortie des tests sous des avertissements « Not implemented ».
window.scrollTo = jest.fn();
