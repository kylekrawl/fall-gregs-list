function AnimalsService() {

    var animals = [{
        id: 'asdfkljsdafdsaflkj239023u9402u',
        type: 'Cat',
        price: 50,
        description: 'Cat.',
        location: 'Boise',
        contact: 'testcat@cats.cat',
        img: '//loremflickr.com/200/200/cat',
        title: 'Your New Cat'
    }]

    var id = 0;
    function Animal(config){
        this.title = config.title.value
        this.type = config.type.value
        this.price = config.price.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.description = config.description.value
        this.img = config.img.value
        this.id = id++
    }

    this.getAnimals = function getAnimals(){
        return animals
    }
    
    this.getAnimal = function getAnimal(id){
        for (var i = 0; i < animals.length; i++) {
            var animals = animals[i];
            if(id == animal.id){
                return animal
            }
        }
    }

    this.addAnimal = function addAnimal(form){
        var newAnimal = new Animal(form)
        animals.unshift(newAnimal)
    }

}