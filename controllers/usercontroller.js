

const usermodels = require('../models/usermodels');


exports.addStudent = async (req, res,) => {
    try {
        console.log('test');
        const data = new addStudent({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            rollNo: req.body.rollNo,
            subject: req.body.subject,
            section: req.body.section,
            age: req.body.age,
            address: {
                street: req.body.address.street,

                city: req.body.address.city,

                state: req.body.address.state,

            },
            PersonalallInfo: {
                fatherName: req.body.PersonalallInfo.fatherName,
                PhoneNumber: req.body.PersonalallInfo.PhoneNumber,
                familyName: req.body.PersonalallInfo.familyName,
            },
        })
        const user = await data.save()
        res.send({ status: 200, message: 'added sucessfully', data: user })

        console.log('user', user);
    } catch (error) {
        console.log(error);
    }
}
exports.update = async (req, res) => {
    // console.log(req.body.firstName, req.params, req.query);
    // await usermodels.findOneAndUpdate({ _id: req.query.id }, { firstName: req.body.firstName })
try{
    const user = await usermodels.findById({ _id: req.query.id })
    if(user){
        if(req.body.firstName){
            user.firstName = req.body.firstName;
        }
        if(req.body.lastName){
            user.lastName = req.body.lastName;
        }
        let userAfterSaved = await user.save();
        if(userAfterSaved){
            //  suceess update send
        }
        else{
            //  not success update send 
        }
    }
    else{
        // res of no user found
    }
    res.send({ status: 200, message: 'Update sucessfully', data: user })

}catch(e){
    req.send({status:401,message:'not updated',data:user})

}


exports.get = async (req, res) => {
    try{
    console.log('get');
    console.log(req.body._id, req.params, req.query);

    const user = await usermodels.find()//sorting
    const filter = {}
    filter.usermodels = {
        usermodels: (req.params.usermodels)
    }
        res.send({ status: 200, message: 'Update sucessfully', data: user })


}catch(e){
    req.send({status:401,message:'not get',data:user})
}


exports.getpage = async (req, res) => {
    const resultsPerPage = 5;
    let page = req.params.page;
    const search = req.query.search;

    page = page - 1

    usermodels.find({ page: req.params.page, page: req.query.page })
        .select("rollNo")
        .sort({ rollNo: "" })
        .limit(resultsPerPage)
        // .getFilter({page:""})
        .skip(resultsPerPage * page)
        .then((results) => {
            return res.status(200).send(results);
        })
        .catch((err) => {
            return res.status(500).send(err);
        });
    //});
}
exports.delete = async (req, res) => {
    console.log('delete');
    console.log(req.body._id, res.params, req.query);
    const user = await usermodels.deleteOne({ _id: req.body._id })
    res.send(user)
}
}
}
