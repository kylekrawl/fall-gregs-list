function PropertiesService() {
    var properties = [{
        id: 'asdfkljsdafdsaflkj239023u9402u',
        type: 'Apartment',
        price: 50,
        description: 'Great place, hardly any rats.',
        location: 'Boise',
        contact: 'testproperty@properties.properies',
        img: '//loremflickr.com/200/200/house',
        title: 'Your New Home'
    }]

    var id = 0;
    function Property(config){
        this.title = config.title.value
        this.type = config.type.value
        this.price = config.price.value
        this.contact = config.contact.value
        this.location = config.location.value
        this.description = config.description.value
        this.img = config.img.value
        this.id = id++
    }

    this.getProperties = function getProperties(){
        return properties
    }
    
    this.getProperty = function getProperty(id){
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if(id == property.id){
                return property
            }
        }
    }

    this.addProperty = function addProperty(form){
        var newProperty = new Property(form)
        properties.unshift(newProperty)
    }

}