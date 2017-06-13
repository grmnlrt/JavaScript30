set variables avec const
On ecoute un event avec addEventListener
 
On call sur window => 
window.addEventListener(‘keydown’, function(e) { 
});
 
attention concatenation avec guillemets differents
 
if(!audio) return pour eviter que ca renvoie null
Le return stoppe la fonction
 
.currentTime pour enchainer les sons sans attendre que le son se finisse
.classList.add == .addClass
.classList.toggle ou remove ou add(‘classe’)
.play() pour jouer les sons wav
 
setTimeout(function() {
} 0.07)
Pour stopper fonction apres temps t
 
Autre solution est d’ecouter chaque key en iterant sur keys (.forEach) et de caller une fonction qui stoppera la transition de la classe .key
 
On call removeTransition que l’on set en amont pour stopper transition
 
Quand on fait un console log on voit qu’il appelle 6 events transitions (transform, box-shadow, border top right bottom & left)
 
Par soucis de performance on peut rajouter un if pour flagger uniquement la transition avec le propertyname qui nous interesse (ici transform).
 
Penser a refactoriser dans des fonctions que l’on set en amont. Puis ensuite appeler la fonction playSound
