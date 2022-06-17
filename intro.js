// CRUD //

const db = require('./models')

const drinkCRUD = async () => {
    try {
        //CREATE
        // step 1: construct new drink (match schema)
        const newDrink = new db.Drink({
            name: 'Chocolate Milk',
            rating: 10
        })

        // step 2: save it!
        await newDrink.save()

        //READ (main ones (3))
        //finding many 
        const foundDrinks = await db.Drink.find({
            name: 'Chocolate Milk'
        })
    //    console.log('found drink:', foundDrinks)

        // Find many
        const oneDrink = await db.Drink.findOne({
            rating: 10
        })
    //    console.log('oneDrink:', oneDrink)

        // Find by ID
        const idFind = await db.Drink.findById(newDrink.id)
        
        //UPDATE
        //updating and saving an instance
        // changing the props here are no Async
        idFind.rating = 11
        await idFind.save() //this is when new data goes into DB
        
       // console.log('idFind:', idFind)

       // find one and update it
       // {new:true} option returns the updated value to user after update
       const updatedOne = await db.Drink.findOneAndUpdate({name: "Chocolate Milk"},{name: "Strawberry Milk", rating: 2}, { new: true })

       // console.log('updatedOne', updatedOne)

        const upserted = await db.Drink.findOneAndUpdate({ name: 'Banana Milk'}, { name: 'Banana Milk', rating: 7 }, { upsert: true, new: true})
       // console.log(upserted)
        
        //DESTROY
        // instance method way (self destruct method)
        await upserted.remove()

        // Other methods 
        const deleted = await db.Drink.findOneAndDelete({ name: 'Strawberry Milk'})
        console.log(deleted)

    } catch (err) {
        console.warn('Fire OH NO!', err)
    }
}

drinkCRUD()