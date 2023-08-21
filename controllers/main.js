const login = async (req,res) =>{
    res.send('Fake Auth Route')
}

const dashboard = async(req,res) =>{
    const randomNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, Test User`,secret:`Authorized, here is your number: ${randomNumber}`})
}

module.exports = {login,dashboard}